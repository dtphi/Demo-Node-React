'use strict'

const { product, clothing, electronic, furniture } = require('../../models/product.model')

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

  async createProduct (product_id) {
    return await product.create({ ...this, _id: product_id })
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

class Electronic extends Product {
  async createProduct () {
    const newElectronic = await electronic.create({
      ...this.product_attributes,
      product_shop: this.product_shop
    })
    if (!newElectronic) throw new BadRequestError(`Create new Electronic Error ${this.product_name}`)

    const newProduct = await super.createProduct(newElectronic._id)
    if (!newProduct) throw new BadRequestError('Create new product error')

    return newProduct
  }
}

class Furniture extends Product {
  async createProduct () {
    const newFurniture = await furniture.create({
      ...this.product_attributes,
      product_shop: this.product_shop
    })
    if (!newFurniture) throw new BadRequestError(`Create new furniture error ${this.product_name}`)

    const newProduct = await super.createProduct(newFurniture._id)
    if (!newProduct) throw new BadRequestError('Create new furniture error')

    return newProduct
  }
}

module.exports = {
  Clothing,
  Electronic,
  Furniture
}
