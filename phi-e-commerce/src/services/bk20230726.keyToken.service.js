'use strict'

const keyTokenModel = require('../models/keytoken.model')

class KeyTokenService {
  constructor () {
  }

  static createKeyToken = async ({ userId, publicKey }) => {
    try {
      // need to change the public key to string.
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
