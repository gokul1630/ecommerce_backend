const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const { DEFAULT_USER_AVATAR } = require('../constants/constants')

const UserSchema = mongoose.Schema({
  user: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phoneNumber: { type: String },
  dob: { type: String },
  address: { type: String },
  image: {
    type: String,
    default: DEFAULT_USER_AVATAR,
  },
})

UserSchema.methods.getToken = function () {
  return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.EXPIRES_IN,
  })
}
UserSchema.methods.checkPassword = async function (password) {
  return await bcrypt.compare(password, this.password)
}

module.exports = mongoose.model('User', UserSchema, 'User')
