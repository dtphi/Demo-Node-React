'use strict'

const { furniture } = require('../../models/product.model')
const { BadRequestError } = require('../../core/error.response')
const Product = require('../product')

class Furniture extends Product {
    async createProduct() {
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

module.exports = Furniture