'use strict'

const DiscountService = require('../services/discount.service')
const { SuccessResponse } = require('../core/success.response')

class DiscountController {
  /**
   *
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  createDiscountCode = async (req, res, next) => {
    new SuccessResponse({
      message: 'Create discount success',
      metadata: await DiscountService.createDiscountCode({
        ...req.body,
        shopId: req.user.userId
      })
    }).send(res)
  }

  /**
   *
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  getDiscountCodes = async (req, res, next) => {
    new SuccessResponse({
      message: 'Get discount code success',
      metadata: await DiscountService.getDiscountCode({
        ...req.query,
        shopId: req.user.userId
      })
    }).send(res)
  }

  /**
   *
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  getAllDiscountAmount = async (req, res, next) => {
    new SuccessResponse({
      message: 'Get discount amount success',
      metadata: await DiscountService.getAllDiscountAmount({
        ...req.body
      })
    }).send(res)
  }

  /**
   *
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  getAllDiscountCodesWithProduct = async (req, res, next) => {
    new SuccessResponse({
      message: 'Get discount amount success',
      metadata: await DiscountService.getAllDiscountCodesWithProduct({
        ...req.query
      })
    }).send(res)
  }
}

module.exports = new DiscountController()
