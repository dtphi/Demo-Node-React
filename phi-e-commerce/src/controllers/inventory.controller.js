'use strict'

const { SuccessResponse } = require('../core/success.response')
const InventoryService = require('../services/inventory.service')

class InventoryController {
  /**
   *
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  addStockToInventory = async (req, res, next) => {
    new SuccessResponse({
      message: 'Add stock inventory success',
      metadata: await InventoryService.addStockToInventory(req.body)
    }).send(res)
  }
}

module.exports = new InventoryController()
