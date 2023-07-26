'use strict'

const keyTokenModel = require('../models/keytoken.model')

class KeyTokenService {
    constructor() {
    }

    // Level 0
    static _createKeyToken = async ({ userId, publicKey, privateKey }) => {
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

    // Level 1
    static createKeyToken = async ({ userId, publicKey, privateKey, refreshToken }) => {
        try {
            const filter = { user: userId }, update = {
                publicKey, privateKey, refreshTokenUsed: [], refreshToken
            }, options = { upsert: true, new: true }

            const tokens = keyTokenModel.findOneAndUpdate(filter, update, options)

            return tokens ? (await tokens).publicKey : null
        } catch (e) {
            return e
        }
    }
}

module.exports = KeyTokenService