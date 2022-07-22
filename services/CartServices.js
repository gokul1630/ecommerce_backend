const CartModel = require('../models/CartModel')
const UserModel = require('../models/UserModel')

exports.getAllItemsService = async function (userId) {
  return await UserModel.findById(userId).lean().populate('cartList').exec()
}

exports.addNewItemService = async function (data) {
  return await CartModel.create(data)
}

exports.updateCartItemService = async function (data) {
  return await CartModel.findByIdAndUpdate(data._id, { ...data }, { new: true })
}

exports.deleteCartItemService = async function (id) {
  return await CartModel.findByIdAndDelete(id)
}

exports.addCartItems = async  (userId, cartId)=> {
  return await CartModel.findByIdAndUpdate(cartId, {
    $addToSet: { userId },
  })
}
