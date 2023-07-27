'use strict'
 
const shopModel = require('../models/shop.model')
const bcrypt = require('bcrypt')
const crypto = require('node:crypto')
const KeyTokenService = require('./keyToken.service')
const { createTokenPair } = require('../auth/authUtils')
const { getInfoData } = require('../utils')
const { BadRequestError, AuthFailureError } = require('../core/error.response')
const { findByEmail } = require('./shop.service')

const ROLE_SHOP = {
    ADMIN: 'admin',
    SHOP:'shop'
}
class AccessService {

    /**
     * Remove key store _id when logout.
     * @param {*} keyStore 
     * @returns 
     */
    static logout = async (keyStore) => {
        return delKey = await KeyTokenService.removeKeyById(keyStore._id)
    }

    /**
     * 1 - check email in dbs
     * 2 - match password
     * 3 - create AT vs RT and save to database
     * 4 - generates tokens
     * 5 - get data return login
     */
    static login = async ({ email, password, refreshToken = null }) => {
        // 1.
        const foundShop = await findByEmail({email})
        if (!foundShop) {
            throw new BadRequestError('Error: Shop not registered')
        }
        //2.
        const isMatch = await bcrypt.compare(password, foundShop.password)
        if (!isMatch) {
            throw new AuthFailureError('Error: Authentication failed')
        }
        //3.
        const privateKey = crypto.randomBytes(64).toString('hex')
        const publicKey = crypto.randomBytes(64).toString('hex')
        //4.
        // create token pair
        const { _id: userId } = foundShop
        const tokens = await createTokenPair({ userId, email}, publicKey, privateKey )

        await KeyTokenService.createKeyToken({ refreshToken: tokens.refreshToken, publicKey, privateKey, userId })

        return {
            shop: getInfoData({ fields: [ '_id', 'name', 'email' ], obj: foundShop }),
            tokens
        }
    }

    static signUp = async ({ name, email, password }) => {

        // Step 1: Check email exist?
        // clean() : return origin object.
        //const hotelShop = await shopModel.findOne({ email }).clean()
        const hotelShop = await shopModel.findOne({ email })

        if (hotelShop) {
            throw new BadRequestError('Error: shop already registered')
        }

        const passHash = await bcrypt.hash(password, 10)

        const newShop = await shopModel.create({ 
            name, email, password: passHash, roles: [ROLE_SHOP.SHOP] 
        })
        
        if (newShop) {
            // Create privateKye and publicKey .
            const privateKey = crypto.randomBytes(64).toString('hex')
            const publicKey = crypto.randomBytes(64).toString('hex')

            console.log(privateKey, publicKey) // Save to KeyTokenStore.

            const keyStore = await KeyTokenService.createKeyToken({
                userId: newShop._id,
                publicKey,
                privateKey
            })
            console.log('keyStore', keyStore)
            if (!keyStore) {
                return {
                    code: 'xxx',
                    message: 'Public key string error creating',
                    status: 'error'
                }
            }

            // create token pair
            const tokens = await createTokenPair({ userId: newShop._id, email}, publicKey, privateKey )
            console.log(`Created token successfully ${tokens}`)

            return {
                code: 201,
                message: 'Shop created successfully',
                status:'success',
                metadata: {
                    shop: getInfoData({ fields: ['_id', 'email', 'name'], obj: newShop }),
                    tokens
                }
            }
            // const token.
        }
    }
}

module.exports = AccessService