'use strict'

const { product } = require('../models/product.model')
const { insertInventory } = require('../models/repositories/inventory.repo')
const { pushNotiToSystem } = require('../services/notification.service')
const { BadRequestError } = require('../core/error.response')

class Product {
    constructor({
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

    async createProduct(product_id) {
        if (!product_id) throw new BadRequestError('Invalid product id provided')
        const newProduct = await product.create({ ...this, _id: product_id })
        if (newProduct) {
            // Create a new inventory product. add the product_stock in the inventory
            await insertInventory({
                productId: newProduct._id,
                stock: this.product_quality,
                shopId: this.product_shop
            })

            // Create notification to system
            await pushNotiToSystem({
                type: 'SHOP-001',
                senderId: this.product_shop,
                receivedId: 1,
                options: {
                    product_name: this.product_name,
                    shop_name: this.product_shop
                }
            }).then((rs) => {
                console.log(rs)
            }).catch((err) => console.log(err.stack))
        }

        return newProduct
    }
}

module.exports = Product
