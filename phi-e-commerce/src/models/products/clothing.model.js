const { Schema, model } = require('mongoose')

const DOCUMENT_NAME = 'Clothing'
const COLLECTION_CLOTHING_NAME = 'Clothes'

const clothingSchema = new Schema({
  brand: { type: String, required: true },
  size: String,
  material: String,
  product_shop: { type: Schema.Types.ObjectId, ref: 'Shop' }
}, {
  collection: COLLECTION_CLOTHING_NAME,
  timestamps: true
})

module.exports = {
  clothing: model(DOCUMENT_NAME, clothingSchema)
}
