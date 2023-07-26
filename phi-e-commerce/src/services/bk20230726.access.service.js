'use strict'
 
const shopModel = require('../models/shop.model')
const bcrypt = require('bcrypt')
const { generateKeyPairSync, createPublicKey } = require('crypto')
const KeyTokenService = require('./bk20230726.keyToken.service')
const { createTokenPair } = require('../auth/authUtils')
const { getInfoData } = require('../utils')
const { BadRequestError } = require('../core/error.response')

const ROLE_SHOP = {
    ADMIN: 'admin',
    SHOP:'shop'
}
class AccessService {

    static signUp = async ({ name, email, password }) => {
        try {
            // Step 1: Check email exist?
            // clean() : return origin object.
            //const hotelShop = await shopModel.findOne({ email }).lean()
            const hotelShop = await shopModel.findOne({ email })

            if (hotelShop) {
                throw new BadRequestError('Error shop already registered')
            }

            const passHash = await bcrypt.hash(password, 10)

            const newShop = await shopModel.create({ 
                name, email, password: passHash, roles: [ROLE_SHOP.SHOP] 
            })
            
            if (newShop) {
                // Create cryptographic usually using for the larger system as amazon.com ....
                // Create privateKye and publicKey .
                // PublicKey CryptoGraphy standard.
                const { privateKey, publicKey } = generateKeyPairSync('rsa', {
                    modulusLength: 4096,
                    publicKeyEncoding: {
                        type:'pkcs1',
                        format: 'pem'
                    },
                    privateKeyEncoding: {
                        type: 'pkcs1',
                        format: 'pem'
                    }
                })

                console.log(privateKey, publicKey) // Save to KeyTokenStore.

                const publicKeyString = await KeyTokenService.createKeyToken({
                    userId: newShop._id,
                    publicKey
                })

                if (!publicKeyString) {
                    return {
                        code: 'xxx',
                        message: 'Public key string error creating',
                        status: 'error'
                    }
                }

                console.log('Public key string::', publicKeyString)
                const publicKeyObject = createPublicKey(publicKeyString)
                console.log('Public key object::', publicKeyObject)
                // create token pair
                const tokenPair = createTokenPair({ userId: newShop._id, email}, publicKeyObject, privateKey )
                console.log(`Created token successfully ${tokenPair}`)

                return {
                    code: 201,
                    message: 'Shop created successfully',
                    status:'success',
                    metadata: {
                        shop: getInfoData({ fields: ['_id', 'email', 'name'], object: newShop }),
                        tokens
                    }
                }
                // const token.
            }
        } catch (e) {
            return {
                code: 'xxx',
                message: e.message,
                status: 'error'
            }
        }
    }
}

module.exports = AccessService