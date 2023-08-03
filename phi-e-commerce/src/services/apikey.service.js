'use strict'

const apiKeyModel = require('../models/apikey.model')
const crypto = require('node:crypto')

/**
 *
 * @param {*} key
 * @returns
 */
const findById = async (key) => {
  // Documents returned from queries with the lean option enabled are plain javascript objects
  // create a new api key for test.
  // const newKey = await apiKeyModel.create({key: crypto.randomBytes(64).toString('hex'), permissions: ['0000'] })
  // console.log('new Key::::', newKey)
  const objKey = apiKeyModel.findOne({ key, status: true }).lean()

  return objKey
}

module.exports = {
  findById
}
