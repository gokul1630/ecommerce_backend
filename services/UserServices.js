const User = require('../models/UserModel')

exports.findUserService = async (userId) => {
  return await User.findById(userId)
}

exports.signInService = async (email) => {
  return await User.findOne({ email })
}

exports.signUpService = async (data) => {
  return await User.create(data)
}

exports.updateUserService = async (id, data) => {
  return await User.findByIdAndUpdate(id, data, { new: true })
}
