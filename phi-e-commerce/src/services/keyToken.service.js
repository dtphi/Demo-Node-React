'use strict'

const keyTokenModel = require('../models/keytoken.model')
const { Types } = require('mongoose')

class KeyTokenService {

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

    static findByUserId = async ( userId ) => {
        //TypeError: Class constructor ObjectId cannot be invoked without 'new'
        return await keyTokenModel.findOne({ user: new Types.ObjectId(userId) }).lean()
    }

    static removeKeyById = async ( id ) => {
        return await keyTokenModel.deleteOne({ _id: id })
    }
}

module.exports = KeyTokenService