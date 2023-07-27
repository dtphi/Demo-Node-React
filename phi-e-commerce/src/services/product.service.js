'use strict'

const { BadRequestError } = require('../core/error.response')
const { product, clothing, electronic } = require('../models/product.model')

// Define factory to create a product.
class ProductFactory {
  static async createProduct (type, payload) {
    switch (type) {
      case 'Clothing':
        new Clothing(payload).createProduct()
        break
      case 'Electronics':
        new Electronics(payload).createProduct()
        break
      default:
        throw new BadRequestError(`Invalid type ${type}`)
    }
  }
}

// Base class for the product
class Product {
  constructor ({
    product_name, product_thumb, product_description, product_price,
    product_quality, product_type, product_shop, product_attributes
  }) {
    this.product_name = product_name
    this.product_thumb = product_thumb
    this.product_description = product_description
    this.product_price = product_price
    this.product_quality = product_quality
    this.product_type = product_type
    this.product_shop = product_shop
    this.product_attributes = product_attributes
  }

  async createProduct () {
    return await product.create(this)
  }
}

class Clothing extends Product {
  async createProduct () {
    const newClothing = await clothing.create(this.product_attributes)
    if (!newClothing) throw new BadRequestError(`Create new Clothing Error ${this.product_name}`)

    const newProduct = await super.createProduct()
    if (!newProduct) throw new BadRequestError('Create new product error')

    return newProduct
  }
}

class Electronics extends Product {
  async createProduct () {
    const newElectronic = await electronic.create(this.product_attributes)
    if (!newElectronic) throw new BadRequestError(`Create new Electronic Error ${this.product_name}`)

    const newProduct = await super.createProduct()
    if (!newProduct) throw new BadRequestError('Create new product error')

    return newProduct
  }
}

module.exports = ProductFactory
