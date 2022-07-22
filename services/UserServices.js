const User = require('../models/UserModel')

exports.findUserService = async (userId) => {
  return await User.findById(userId)
}

exports.signInService = async (email) => {
  return await User.findOne({ email })
}

exports.signUpService = async (user, email, password) => {
  return await User.create({ user, email, password })
}

exports.updateUserService = async (id, data) => {
  return await User.findByIdAndUpdate(id, data, { new: true })
}
