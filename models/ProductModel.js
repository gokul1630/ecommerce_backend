const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
  brand: { type: String },
  description: { type: String, required: true },
  imageLink: { type: String },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  stocks: { type: Number, required: true, default: 1 },
  categoryId: { type: mongoose.Types.ObjectId, ref: 'Category' },
})

module.exports = mongoose.model('Products', productSchema)
