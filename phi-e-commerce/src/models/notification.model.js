'use strict'

const { model, Schema } = require('mongoose')

const DOCUMENT_NAME = 'Notification'
const COLLECTION_NAME = 'Notifications'

/**
 * EX: Notification
 * ORDER-001: Order success
 * ORDER-002: Order failed
 * PROMOTION-001:: New product
 * SHOP-001: New product for user follow
 */
const notifySchema = new Schema({
    noti_type: { type: String, required: true, enum: ['ORDER-001', 'ORDER-002', 'PROMOTION-001', 'SHOP-001'] },
    noti_senderId: { type: Schema.Types.ObjectId, required: true, ref: 'Shop' },
    noti_receivedId: { type: Number, required: true },
    noti_content: { type: String, required: true },
    noti_options: { type: Object, default: {} }
}, {
    timestamps: true,
    collection: COLLECTION_NAME
})

module.exports = {
    notification: model(DOCUMENT_NAME, notifySchema)
}