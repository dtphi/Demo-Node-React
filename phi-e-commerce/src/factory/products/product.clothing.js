'use strict'

const { clothing } = require('../../models/product.model')
const { BadRequestError } = require('../../core/error.response')
const Product = require('../product')

class Clothing extends Product {
    async createProduct() {
        const newClothing = await clothing.create({
            ...this.product_attributes,
            product_shop: this.product_shop
        })
        if (!newClothing) throw new BadRequestError(`Create new Clothing Error ${this.product_name}`)

        const newProduct = await super.createProduct(newClothing._id)
        if (!newProduct) throw new BadRequestError('Create new product error')

        return newProduct
    }
}

module.exports = Clothing