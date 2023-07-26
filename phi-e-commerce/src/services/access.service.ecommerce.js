'use strict'
 
const shopModel = require('../models/shop.model')
const bcrypt = require('bcrypt')
const crypto = require('node:crypto')
const KeyTokenService = require('./keyToken.ecommerce.service')
const { createTokenPair } = require('../auth/authEcUtils')
const { getInfoData } = require('../utils')

const ROLE_SHOP = {
    ADMIN: 'admin',
    SHOP:'shop'
}
class AccessService {

    static signUp = async ({ name, email, password }) => {
        console.log(`Request Body:: ${name}, ${email}, ${password}`)
        try {
            // Step 1: Check email exist?
            // clean() : return origin object.
            //const hotelShop = await shopModel.findOne({ email }).clean()
            const hotelShop = await shopModel.findOne({ email })
            console.log('HotelShop:::', hotelShop)

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
        } catch (e) {
            console.log(e)
            return {
                code: 'xxx',
                message: e.message,
                status: 'error'
            }
        }
    }
}

module.exports = AccessService