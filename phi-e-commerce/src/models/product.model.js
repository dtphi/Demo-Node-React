const { Schema, model } = require("mongoose")

const DOCUMENT_NAME = 'Product'
const COLLECTION_NAME = 'Products'
const COLLECTION_CLOTHING_NAME = 'Clothings'
const COLLECTION_ELECTRON_NAME = 'Electrons'

const productSchema = new Schema({
    product_name: { type: String, required: true, },
    product_thumb: { type: String, required: true, },
    product_description: { type: String, },
    product_price: { type: Number, required: true, },
    product_quality: { type: Number, required: true, },
    product_type: { type: String, required: true, enum: ["Electronics", "Clothing", "Furniture"] },
    product_shop: { type: Schema.Types.ObjectId, ref: 'Shop' },
    product_attributes: { type: Schema.Types.Mixed, required: true },
}, {
    timestamps: true,
    collection: COLLECTION_NAME
})

const electronicsSchema = new Schema({
    manufacturer: { type: String, required: true},
    model: String,
    color: String,
    product_shop: { type: Schema.Types.ObjectId, ref: 'Shop' }
}, {
    collection: COLLECTION_ELECTRON_NAME,
    timestamps: true
})

const clothingSchema = new Schema({
    brand: { type: String, required: true},
    size: String,
    material: String,
    product_shop: { type: Schema.Types.ObjectId, ref: 'Shop' }
}, {
    collection: COLLECTION_CLOTHING_NAME,
    timestamps: true
})

module.exports = {
    product: model(DOCUMENT_NAME, productSchema),
    electronic: model("Electronic", electronicsSchema),
    clothing: model("Clothing", clothingSchema),
}