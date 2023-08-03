'use strict'

const CartService = require('../services/cart.service')
const { SuccessResponse } = require('../core/success.response')

class CartController {
  /**
   *
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  addToCart = async (req, res, next) => {
    new SuccessResponse({
      message: 'Create cart success',
      metadata: await CartService.addToCart(req.body)
    }).send(res)
  }

  /**
   * update - | + product.
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  update = async (req, res, next) => {
    new SuccessResponse({
      message: 'Update cart success',
      metadata: await CartService.addToCartV2(req.body)
    }).send(res)
  }

  delete = async (req, res, next) => {
    new SuccessResponse({
      message: 'Delete cart success',
      metadata: await CartService.deleteItemUserCart(req.body)
    }).send(res)
  }

  listToCart = async (req, res, next) => {
    new SuccessResponse({
      message: 'List cart success',
      metadata: await CartService.getListUserCart(req.query)
    }).send(res)
  }
}

module.exports = new CartController()
