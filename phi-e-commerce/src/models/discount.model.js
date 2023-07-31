const { model, Schema } = require("mongoose")

const DOCUMENT_NAME = 'Discount'
const COLLECTION_NAME = 'Discounts'

const apiKeySchema = new Schema({
    discount_name: {
        type: String,
        required: true,
    },
    discount_description: {
        type: String,
        required: true,
    },
    discount_type: {
        type: String,
        default: 'fixed_amount' // percentage
    },
    discount_value: {
        type: String, // 10.000, 10
        required: true,
    },
    discount_code: {
        type: String,
        required: true,
    },
    discount_start_day: {
        type: Date,
        required: true,
    },
    discount_end_day: {
        type: Date,
        required: true,
    },
    discount_max_uses: { // so luong discount duoc ap dung
        type: Number,
        required: true,
    },
    discount_uses_count: { // so luong discount da duoc su dung
        type: Number,
        required: true,
    },
    discount_users_used: { // so discount da duoc ai su dung
        type: Array,
        default: [],
    },
    discount_max_uses_per_user: { // so discount toi da duoc su dung cho moi user
        type: Number,
        required: true,
    },
    discount_min_order_value: { // so discount da duoc su dung
        type: Number,
        required: true,
    },
    discount_shopId: { // 
        type: Schema.Types.ObjectId,
        ref: 'Shop'
    },

    discount_is_active: {
        type: Boolean,
        required: true,
    },
    discount_applies_to: { // discount ap dung cho tat ca product hay chi ap dung cho vai san pham 'specific'
        type: String,
        required: true,
        enum: ['all', 'specific']
    },
    discount_product_ids: { // discount applies specific them so san pham duoc ap dung.
        type: Array,
        default: [],
    }
}, {
    timestamps: true,
    collection: COLLECTION_NAME
});

module.exports = {
    discount: model(DOCUMENT_NAME, apiKeySchema)
}