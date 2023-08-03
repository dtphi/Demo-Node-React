'use strict'

const redis = require('redis')
const { promisify } = require('util')
const redisClient = redis.createClient()
const { reservationInventory } = require('../models/repositories/inventory.repo')

// Khoa bi quan, khoa lac quan
const pexpire = promisify(redisClient.pexpire).bind(redisClient)
const setnxAsync = promisify(redisClient.setnx).bind(redisClient)

/**
 *
 * @param {*} productId
 * @param {*} quantity
 * @param {*} cartId
 * @returns
 */
const acquireLock = async (productId, quantity, cartId) => {
  const key = `lock_v2023_${productId}`
  const retryTimes = 10
  const expireTime = 3000

  for (let i = 0; i < retryTimes; i++) {
    const result = await setnxAsync(key, expireTime)
    console.log('result::', result)

    if (result === 1) {
      // thao tac voi inventory
      isReservation = reservationInventory({ productId, quantity, cartId })
      if (isReservation.modifiedCount) {
        await pexpire(key, expireTime)

        return key
      }

      return null
    } else {
      await new Promise((resolve) => setTimeout(resolve, 50))
    }
  }
}

/**
 *
 * @param {*} keyLock
 * @returns
 */
const releaseLock = async (keyLock) => {
  const delAsyncKey = promisify(redisClient.del).bind(redisClient)

  return await delAsyncKey(keyLock)
}

module.exports = {
  acquireLock,
  releaseLock
}
