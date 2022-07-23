const bcrypt = require('bcrypt')
const {
  EMAIL_REGEX,
  PASSWORD_REGEX,
  INVALID_PASSWORD_WARNING,
  PASSWORD_NOT_MATCHED,
  EMAIL_NOT_REGISTRED,
} = require('../constants/constants')
const {
  signUpService,
  signInService,
  updateUserService,
} = require('../services/UserServices')

const loginUser = async (req, res) => {
  const { email, password } = req.body
  if (!(email && password)) {
    res.status(403).send({
      message: ALL_REQUIRED_FIELDS_WARNING,
    })
  }
  try {
    const user = await signInService(email)
    if (user) {
      const passwordMatch = await user.checkPassword(password)
      if (!passwordMatch) {
        res.status(403).send({ message: PASSWORD_NOT_MATCHED })
      } else {
        let token = await user.getToken()
        res.status(200).json({ token, user: user })
      }
    } else {
      res.status(403).send({ message: EMAIL_NOT_REGISTRED })
    }
  } catch (error) {
    res.status(500).send(error)
  }
}

const signUpUser = async (req, res) => {
  try {
    const { user, email, password, dob, image, address, phoneNumber } = req.body
    if (!(user && email && password)) {
      res.status(403).send({
        message: ALL_REQUIRED_FIELDS_WARNING,
      })
    } else if (checkEmail(email)) {
      res.status(400).send({ message: INVALID_EMAIL_WARNING })
    } else if (checkPassword(password)) {
      res.status(400).send({
        message: INVALID_PASSWORD_WARNING,
      })
    } else {
      let encryptedPassword = await bcrypt.hash(password, 10)
      let data = await signUpService({
        user,
        email,
        dob,
        image,
        address,
        phoneNumber,
        password: encryptedPassword,
      })
      let token = await data.getToken()
      res.json({ token, user: data })
    }
  } catch (error) {
    res.status(500).send(error)
  }
}

const updateUser = async (req, res) => {
  const { user, email, password } = req.body
  const userId = req.user._id
  if (!(user || email || password)) {
    res.status(403).send({
      message: ALL_REQUIRED_FIELDS_WARNING,
    })
  } else if (checkEmail(email)) {
    res.status(400).send({ message: INVALID_EMAIL_WARNING })
  } else if (checkPassword(password)) {
    res.status(400).send({
      message: INVALID_PASSWORD_WARNING,
    })
  } else {
    let encryptedPassword = await bcrypt.hash(password, 10)
    let data = {
      ...req.body,
      password: encryptedPassword,
    }
    let userData = await updateUserService(userId, data)
    let token = await userData.getToken()
    res.json({ token, user: userData })
  }
}

const checkEmail = (email) => {
  const emailTest = EMAIL_REGEX.test(String(email).toLowerCase())
  return !emailTest
}
const checkPassword = (password) => {
  const passwordTest = PASSWORD_REGEX.test(password)
  return !passwordTest
}

module.exports = {
  loginUser,
  signUpUser,
  updateUser,
}
