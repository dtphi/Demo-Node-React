'use strict'

const { BadRequestError } = require('../core/error.response')
const { inventory } = require('../models/inventory.model')
const { getProductById } = require('../models/repositories/product.repo')

class InventoryService {
  /**
     *
     * @param {*} param0
     * @returns
     */
  static addStockToInventory = async ({ stock, productId, shopId, location = '123 - HTanPhat - HCM' }) => {
    const product = getProductById(productId)
    if (!product) throw new BadRequestError('The product does not exist!')

    const query = { inven_shopId: shopId, inven_productId: productId }
    const updateSet = {
      $inc: {
        inven_stock: stock
      },
      $set: {
        inven_location: location
      }
    }; const options = { upsert: true, new: true }

    return await inventory.findByIdAndUpdate(query, updateSet, options)
  }
}

module.exports = InventoryService
