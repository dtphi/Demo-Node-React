const { Schema, model } = require('mongoose')

const DOCUMENT_NAME = 'Electronic'
const COLLECTION_ELECTRON_NAME = 'Electronics'

const electronicsSchema = new Schema({
  manufacturer: { type: String, required: true },
  model: String,
  color: String,
  product_shop: { type: Schema.Types.ObjectId, ref: 'Shop' }
}, {
  collection: COLLECTION_ELECTRON_NAME,
  timestamps: true
})

module.exports = {
  electronic: model(DOCUMENT_NAME, electronicsSchema)
}