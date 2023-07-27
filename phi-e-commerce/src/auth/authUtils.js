'use strict'

const JWT = require('jsonwebtoken')
const asyncHandler = require('../helpers/asyncHandler')
const { AuthFailureError, NotFoundError } = require('../core/error.response')
const { findByUserId } = require('../services/keyToken.service')

const HEADER = {
    API_KEY: 'x-api-key',
    CLIENT_ID: 'x-client-id',
    AUTHORIZATION: 'authorization',
}

const createTokenPair = async ( payload, publicKey, privateKey ) => {
    try {
        // accessToken 
        const accessToken = await JWT.sign( payload, publicKey, {
            expiresIn: '1 days'
        } )

        // refreshToken
        const refreshToken = await JWT.sign( payload, privateKey, {
            expiresIn: '2 days'
        } )

        // Verify
        JWT.verify( accessToken, publicKey, (err, decode) => {
            if (err) {
                console.error(`Error verify::`, err)
            } else {
                console.log(`Decode verify::`, decode)
            }
        } )

        return { accessToken, refreshToken }
    } catch (e) {
        return e
    }
}

/**
 * Required 3 header must send request from client : request.headers({x-api-key: '', x-client-key: '', authorization: ''})
 * x-api-key: key shop client 
 * x-client-key: _id shop client
 * authorization: accessToken when shop client login.
 * 
 * Authentication middleware
 * At authentication middleware will check user and assign keyStore to req to use for anywhere.
 */
const authentication = asyncHandler( async (req, res, next) => {
    /**
     * 1 - check user id missing ?
     * 2 - get access token
     * 3 - verity token
     * 4 - check user in bds
     * 5 - check keyStore with userId
     * 6 - OK all => return next()
     */
    
    // 1 .
    const userId = req.headers[HEADER.CLIENT_ID]
    if (!userId) throw new AuthFailureError('Invalid Request')

    // 2.
    const keyStore = await findByUserId(userId)
    if (!keyStore) throw new NotFoundError('Not found key store')

    // 3.
    const accessToken = req.headers[HEADER.AUTHORIZATION]
    if (!accessToken) throw new AuthFailureError('Invalid Request')

    /**
     * 4
     */
    try {
        const decodeUser = JWT.verify(accessToken, keyStore.publicKey)
        if (userId !== decodeUser.userId) throw new AuthFailureError('Invalid Request')
        req.keyStore = keyStore
        
        return next()
    } catch (e) {
        throw e
    }
})

/**
 * 
 * @param {*} token 
 * @param {*} keySecret 
 * @returns 
 */
const verifyJWT = async ( token, keySecret ) => {
    return await JWT.verify( token, keySecret )
}

module.exports = {
    createTokenPair,
    authentication,
    verifyJWT
}