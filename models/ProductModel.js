const mongoose = require('mongoose')
const { DEFAULT_USER_AVATAR } = require('../constants/constants')

const productSchema = mongoose.Schema({
  brand: { type: String },
  description: { type: String, required: true },
  image: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  stocks: { type: Number, required: true, default: 0 },
  categoryId: { type: mongoose.Types.ObjectId, ref: 'Category' },
  ratings: { type: String },
  images: [{ type: String }],
  seller: { type: String },
  sellerImage: { type: String, default: DEFAULT_USER_AVATAR },
  sellerStoreLink: { type: String },
})

module.exports = mongoose.model('Products', productSchema)
