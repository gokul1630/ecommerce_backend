const Owner = require('../models/OwnerModel')

exports.findOwnerService = async (ownerId) => {
  return await Owner.findById(ownerId)
}

exports.signInService = async (email) => {
  return await Owner.findOne({ email })
}

exports.signUpService = async (data) => {
  return await Owner.create(data)
}

exports.updateOwnerService = async (id, data) => {
  return await Owner.findByIdAndUpdate(id, data, { new: true })
}
