const { Schema, model } = require('mongoose')

const DOCUMENT_NAME = 'Furniture'
const COLLECTION_FURNITURE_NAME = 'Furnitures'

const furnitureSchema = new Schema({
  brand: { type: String, required: true },
  size: String,
  material: String,
  product_shop: { type: Schema.Types.ObjectId, ref: 'Shop' }
}, {
  collection: COLLECTION_FURNITURE_NAME,
  timestamps: true
})

module.exports = {
  furniture: model(DOCUMENT_NAME, furnitureSchema)
}
