'use strict'

const ProductService = require('../services/product.service')
const { SuccessResponse } = require('../core/success.response')

class ProductController {
  /**
   * Create a new product by product type.
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  createProduct = async (req, res, next) => {
    new SuccessResponse({
      message: 'Created new product successfully',
      metadata: await ProductService.createProduct(req.body.product_type, {
        ...req.body,
        product_shop: req.user.userId
      }
      )
    }).send(res)
  }

  /**
   * Public product by shop
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  publicProductByShop = async (req, res, next) => {
    new SuccessResponse({
      message: 'Public product by shop successfully',
      metadata: await ProductService.publishProductByShop({
        product_id: req.params.id,
        product_shop: req.user.userId
      })
    }).send(res)
  }

  /**
   * Unpublish product by shop
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  unPublicProductByShop = async (req, res, next) => {
    new SuccessResponse({
      message: 'Unpublic product by shop successfully',
      metadata: await ProductService.unPublishProductByShop({
        product_id: req.params.id,
        product_shop: req.user.userId
      })
    }).send(res)
  }

  // Query //
  /**
   *  Get all draft for shop.
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  getAllDraftsForShop = async (req, res, next) => {
    new SuccessResponse({
      message: 'Get list draft product successfully',
      metadata: await ProductService.getAllDraftsForShop({
        product_shop: req.user.userId
      })
    }).send(res)
  }

  getAllPublicForShop = async (req, res, next) => {
    new SuccessResponse({
      message: 'Get list public product successfully',
      metadata: await ProductService.findAllPublishForShop({
        product_shop: req.user.userId
      })
    }).send(res)
  }

  getListSearchProduct = async (req, res, next) => {
    new SuccessResponse({
      message: 'Get get list search product successfully',
      metadata: await ProductService.getListSearchProduct(req.params)
    }).send(res)
  }
  // End query //
}

module.exports = new ProductController()
