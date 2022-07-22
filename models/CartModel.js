const mongoose = require('mongoose')

const cartSchema = mongoose.Schema({
  brand: { type: String },
  description: { type: String, required: true },
  imageLink: { type: String },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, default: 1 },
  stocks: { type: Number, default: 1, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
})

module.exports = mongoose.model('Cart', cartSchema, 'Cart')
