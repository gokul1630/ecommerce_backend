const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
  imageLink: { type: String },
  price: { type: Number, required: true },
  itemName: { type: String, required: true },
  itemDescription: { type: String, required: true },
})

module.exports = mongoose.model('Products', productSchema)
