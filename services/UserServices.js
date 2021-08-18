const User = require('../models/UserModel')

exports.findUserService = async function (userId) {
  return await User.findById(userId)
}

exports.signInService = async function (email) {
  return await User.findOne({ email })
}

exports.signUpService = async function (user, email, password) {
  return await User.create({ user, email, password })
}

exports.addCartItemsToUser = async function (userId, itemId) {
  return await User.findByIdAndUpdate(userId, {
    $push: { cartList: itemId },
  })
}
exports.updateUserService = async (id, data) => {
  return await User.findByIdAndUpdate(id, data, { new: true })
}
