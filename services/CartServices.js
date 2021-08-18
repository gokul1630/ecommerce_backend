const CartModel = require('../models/CartModel')
const UserModel = require('../models/UserModel')

exports.getAllItemsService = async function (userId) {
  return await UserModel.findById(userId).lean().populate('cartList').exec()
}

exports.addNewItemService = async function (data) {
  return await CartModel.create(data)
}
