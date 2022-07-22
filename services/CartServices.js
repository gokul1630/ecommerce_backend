const CartModel = require('../models/CartModel')

exports.getAllItemsService = async (cartId) => {
  return await CartModel.find({ _id: cartId })
}

exports.addCartItemService = async (data) => {
  return await CartModel.create(data)
}

exports.updateCartItemService = async (data) => {
  return await CartModel.findByIdAndUpdate(data._id, { ...data }, { new: true })
}

exports.deleteCartItemService = async (id) => {
  return await CartModel.findByIdAndDelete(id)
}
