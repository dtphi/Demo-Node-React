'use strict'

const { BadRequestError } = require('../core/error.response')
const ProductType = require('./types/product.type')
const { registerStrategy } = require('../utils/index')
const {
  findAllDraftsForShop,
  findAllPublishForShop,
  publishProductByShop,
  unPublishProductByShop,
  searchProductByUser,
  getProductById
} = require('../models/repositories/product.repo')

// Define factory to create a product.
class ProductFactory {
  static productRegistry = {}

  static registerProductType () {
    registerStrategy(ProductType, ProductFactory.productRegistry)
  }

  /**
   *
   * @param {*} type
   * @param {*} payload
   * @returns
   */
  static async createProduct (type, payload) {
    const productClass = ProductFactory.productRegistry[type]
    if (!productClass) throw new BadRequestError(`Invalid product type ${type}`)

    return new productClass(payload).createProduct()
  }

  // Put
  /**
   *
   * @param {*} param0
   * @returns
   */
  static async publishProductByShop ({ product_shop, product_id }) {
    return await publishProductByShop({ product_shop, product_id })
  }

  /**
   *
   * @param {*} param0
   * @returns
   */
  static async unPublishProductByShop ({ product_shop, product_id }) {
    return await unPublishProductByShop({ product_shop, product_id })
  }

  // query
  /**
   *
   * @param {*} param0
   * @returns
   */
  static async findAllDraftsForShop ({ product_shop, limit = 50, skip = 0 }) {
    const query = { product_shop, isDraft: true }
    return await findAllDraftsForShop({ query, limit, skip })
  }

  /**
   *
   * @param {*} param0
   * @returns
   */
  static async findAllPublishForShop ({ product_shop, limit = 50, skip = 0 }) {
    const query = { product_shop, isPublished: true }
    return await findAllPublishForShop({ query, limit, skip })
  }

  /**
   *
   * @param {*} keySearch
   * @returns
   */
  static async getListSearchProduct (keySearch) {
    return await searchProductByUser({ keySearch })
  }

  /**
   *
   * @param {*} product_id
   * @returns
   */
  static async findProductById (product_id) {
    return await getProductById(product_id)
  }
}

ProductFactory.registerProductType()

module.exports = ProductFactory
