const mongoose = require('mongoose')

const cartSchema = mongoose.Schema({
  imageLink: { type: String },
  itemName: { type: String, required: true },
  itemDescription: { type: String, required: true },
  price: { type: Number, required: true },
})

module.exports = mongoose.model('Cart', cartSchema, 'Cart')
