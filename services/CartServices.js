const CartModel = require('../models/CartModel')
const UserModel = require('../models/UserModel')

exports.getAllItemsService = async  (userId) =>{
  return await UserModel.findById(userId).lean().populate('cartList').exec()
}

exports.addNewItemService = async  (data) =>{
  return await CartModel.create(data)
}

exports.updateCartItemService = async  (data)=> {
  return await CartModel.findByIdAndUpdate(data._id, { ...data }, { new: true })
}

exports.deleteCartItemService = async  (id)=> {
  return await CartModel.findByIdAndDelete(id)
}

exports.addCartItems = async  (userId, cartId)=> {
  return await CartModel.findByIdAndUpdate(cartId, {
    $addToSet: { userId },
  })
}
