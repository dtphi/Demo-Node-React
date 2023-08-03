'use strict'

const CheckoutService = require('../services/comment.service')
const { SuccessResponse } = require('../core/success.response')

class CheckoutController {
  /**
   *
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  checkoutReview = async (req, res, next) => {
    new SuccessResponse({
      message: 'Create checkout success',
      metadata: await CheckoutService.checkoutReview(req.body)
    }).send(res)
  }
}

module.exports = new CheckoutController()
