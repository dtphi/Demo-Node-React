const { Schema, model } = require('mongoose')
const slugify = require('slugify')
const { productEnum } = require('../constants/product.type')

const DOCUMENT_NAME = 'Product'
const COLLECTION_NAME = 'Products'

const productSchema = new Schema({
  product_name: { type: String, required: true },
  product_thumb: { type: String, required: true },
  product_description: { type: String },
  product_slug: { type: String }, // i-phone-14
  product_price: { type: Number, required: true },
  product_quality: { type: Number, required: true },
  product_type: { type: String, required: true, enum: productEnum },
  product_shop: { type: Schema.Types.ObjectId, ref: 'Shop' },
  product_attributes: { type: Schema.Types.Mixed, required: true },
  // more
  product_ratingsAverage: {
    type: Number,
    default: 4.5,
    min: [1, 'Rating must be above 1.0'],
    max: [5, 'Rating must be above 5.0'],
    set: (val) => Math.round(val * 10) / 10
  },
  product_variations: { type: Array, default: [] },
  isDraft: {
    type: Boolean,
    default: true, // khong dk select ra
    index: true,
    select: false // khi dùng model.findOne() sẽ khong lay field nay ra
  },
  isPublished: {
    type: Boolean,
    default: false, // khong dk select ra
    index: true,
    select: false // khi dùng model.findOne() sẽ khong lay field nay ra
  }
}, {
  timestamps: true,
  collection: COLLECTION_NAME
})

// create index for search
productSchema.index({
  product_name: 'text',
  product_description: 'text'
})

// This function is call webhook . hook into process before executing save and create method.
// Document middleware runs before .save and .create...
productSchema.pre('save', function (next) {
  this.product_slug = slugify(this.product_name, { lower: true })
  next()
})

module.exports = {
  product: model(DOCUMENT_NAME, productSchema)
}
