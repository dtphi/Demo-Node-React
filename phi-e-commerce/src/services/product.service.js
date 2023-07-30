'use strict'

const { BadRequestError } = require('../core/error.response')
const ProductType = require('./types/product')
const { registerStrategy } = require('../utils/index')
const {
  findAllDraftsForShop,
  findAllPublishForShop,
  publishProductByShop,
  unPublishProductByShop,
  searchProductByUser,
  getProductById,
} = require('../models/repositories/product.repo')

// Define factory to create a product.
class ProductFactory {
  static productRegistry = {}

  static registerProductType() {
    registerStrategy(ProductType, ProductFactory.productRegistry)
  }

  static async createProduct(type, payload) {
    const productClass = ProductFactory.productRegistry[type]
    if (!productClass) throw new BadRequestError(`Invalid product type ${type}`)

    return new productClass(payload).createProduct()
  }

  // Put
  static async publishProductByShop({ product_shop, product_id }) {
    return await publishProductByShop({ product_shop, product_id })
  }

  static async unPublishProductByShop({ product_shop, product_id }) {
    return await unPublishProductByShop({ product_shop, product_id })
  }

  // query
  static async findAllDraftsForShop({ product_shop, limit = 50, skip = 0 }) {
    const query = { product_shop, isDraft: true }
    return await findAllDraftsForShop({ query, limit, skip })
  }

  static async findAllPublishForShop({ product_shop, limit = 50, skip = 0 }) {
    const query = { product_shop, isPublished: true }
    return await findAllPublishForShop({ query, limit, skip })
  }

  static async getListSearchProduct(keySearch) {
    return await searchProductByUser({ keySearch })
  }

  static async findProductById(product_id) {
    return await getProductById(product_id);
  }
}

ProductFactory.registerProductType()

module.exports = ProductFactory
