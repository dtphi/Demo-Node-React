'use strict'

const keyTokenModel = require('../models/keytoken.model')

class KeyTokenService {
    constructor() {
    }

    static createKeyToken = async ({ userId, publicKey }) => {
        try {
            const publicKeyString = publicKey.toString()
            const token = keyTokenModel.create({ 
                user: userId, publicKey: publicKeyString 
            })

            return token ? publicKeyString : null
        } catch (e) {
            return e
        }
    }
}

module.exports = KeyTokenService