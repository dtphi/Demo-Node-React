'use strict'

const keyTokenModel = require('../models/keytoken.ecommerce.model')

class KeyTokenService {
    constructor() {
    }

    static createKeyToken = async ({ userId, publicKey, privateKey }) => {
        try {
            const tokens = keyTokenModel.create({ 
                user: userId,
                publicKey,
                privateKey 
            })

            return tokens ? (await tokens).publicKey : null
        } catch (e) {
            return e
        }
    }
}

module.exports = KeyTokenService