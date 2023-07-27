'use strict'

const keyTokenModel = require('../models/keytoken.model')
const { Types } = require('mongoose')

class KeyTokenService {
  // Level 0
  /**
     *
     * @param {*} param0
     * @returns
     */
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
  /**
     *
     * @param {*} param0
     * @returns
     */
  static createKeyToken = async ({ userId, publicKey, privateKey, refreshToken }) => {
    try {
      const filter = { user: userId }; const update = {
        publicKey, privateKey, refreshTokenUsed: [], refreshToken
      }; const options = { upsert: true, new: true }

      const tokens = keyTokenModel.findOneAndUpdate(filter, update, options)

      return tokens ? (await tokens).publicKey : null
    } catch (e) {
      return e
    }
  }

  /**
     *
     * @param {*} userId
     * @returns
     */
  static findByUserId = async (userId) => {
    // TypeError: Class constructor ObjectId cannot be invoked without 'new'
    return await keyTokenModel.findOne({ user: new Types.ObjectId(userId) }).lean()
  }

  /**
     *
     * @param {*} id
     * @returns
     */
  static removeKeyById = async (id) => {
    return await keyTokenModel.deleteOne({ _id: id })
  }

  /**
     *
     * @param {*} refreshToken
     * @returns
     */
  static findRefreshTokenUsed = async (refreshToken) => {
    return await keyTokenModel.findOne({ refreshTokenUsed: refreshToken }).lean()
  }

  /**
     *
     * @param {*} refreshToken
     * @returns
     */
  static findRefreshToken = async (refreshToken) => {
    return await keyTokenModel.findOne({ refreshToken })
  }

  /**
     *
     * @param {*} userId
     * @returns
     */
  static deleteKeyById = async (userId) => {
    return await keyTokenModel.deleteOne({ user: new Types.ObjectId(userId) })
  }
}

module.exports = KeyTokenService
