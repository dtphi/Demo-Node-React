'use strict'
 
const shopModel = require('../models/shop.model')
const bcrypt = require('bcrypt')
const crypto = require('crypto')
const KeyTokenService = require('./keyToken.service')
const { createTokenPair } = require('../auth/authUtils')

const ROLE_SHOP = {
    ADMIN: 'admin',
    SHOP:'shop'
}
class AccessService {

    static signUp = async ({ name, email, password }) => {
        try {
            // Step 1: Check email exist?
            // clean() : return origin object.
            const hotelShop = await shopModel.findOne({ email }).clean()

            if (hotelShop) {
                return {
                    code: 'xxx',
                    message: 'Shop already registered'
                }
            }

            const passHash = await bcrypt.hash(password, 10)

            const newShop = await shopModel.create({ 
                name, email, password: passHash, roles: [ROLE_SHOP.SHOP] 
            })

            if (newShop) {
                // Create privateKye and publicKey .
                const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
                    moduleLength: 4096
                })

                console.log(privateKey, publicKey) // Save to KeyTokenStore.

                const publicKeyString = await KeyTokenService.createKeyToken({
                    userId: newShop._id,
                    privateKey
                })

                if (!publicKeyString) {
                    return {
                        code: 'xxx',
                        message: 'Public key string error creating',
                        status: 'error'
                    }
                }

                // create token pair
                const tokenPair = createTokenPair({ userId: newShop._id, email}, publicKey, privateKey )
                console.log(`Created token successfully ${tokenPair}`)

                return {
                    code: 201,
                    message: 'Shop created successfully',
                    status:'success',
                    metadata: {
                        shop: newShop,
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