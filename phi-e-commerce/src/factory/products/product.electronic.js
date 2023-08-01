'use strict'

const { electronic } = require('../../models/product.model')
const { BadRequestError } = require('../../core/error.response')
const Product = require('../product')

class Electronic extends Product {
    async createProduct() {
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

module.exports = Electronic