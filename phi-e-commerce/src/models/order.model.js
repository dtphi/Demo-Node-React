'use strict'

const { model, Schema } = require('mongoose')

const DOCUMENT_NAME = 'Order'
const COLLECTION_NAME = 'Orders'

const orderSchema = new Schema({
  order_userId: { type: String, require: true },
  order_checkout: { type: Object, default: {} },
  /**
     * order_checkout: {
     *  totalPrice,
     *  totalApplyDiscount,
     *  feeShip
     * }
     */
  order_shipping: { type: Object, default: {} },
  /**
     * street, city, state, country
     */
  order_payment: { type: Object, default: {} },
  order_products: { type: Array, require: true },
  order_trackingNumber: { type: String, default: '#000018235435' },
  order_status: { type: String, enum: ['pending', 'confirmed', 'shipped', 'cancelled', 'delivered'], default: 'pending' }
}, {
  timestamps: {
    createdAt: 'createOn',
    updatedAt: 'modifiedOn'
  },
  collection: COLLECTION_NAME
})

module.exports = {
  order: model(DOCUMENT_NAME, orderSchema)
}
