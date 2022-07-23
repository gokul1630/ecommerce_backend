const bcrypt = require('bcrypt')
const {
  INVALID_PASSWORD_WARNING,
  INVALID_EMAIL_WARNING,
  EMAIL_NOT_REGISTRED,
  ALL_REQUIRED_FIELDS_WARNING,
  PASSWORD_NOT_MATCHED,
  EMAIL_REGEX,
  PASSWORD_REGEX,
} = require('../constants/constants')
const {
  signUpService,
  signInService,
  updateOwnerService,
} = require('../services/OwnerService')

const loginOwner = async (req, res) => {
  const { email, password } = req.body
  if (!(email && password)) {
    res.status(403).send({
      message: ALL_REQUIRED_FIELDS_WARNING,
    })
  }
  try {
    const owner = await signInService(email)
    if (owner) {
      const passwordMatch = await owner.checkPassword(password)
      if (!passwordMatch) {
        res.status(403).send({ message: PASSWORD_NOT_MATCHED })
      } else {
        let token = await owner.getToken()
        res.status(200).json({ token, owner })
      }
    } else {
      res.status(403).send({ message: EMAIL_NOT_REGISTRED })
    }
  } catch (error) {
    res.status(500).send(error)
  }
}

const signUpOwner = async (req, res) => {
  try {
    const { owner, email, password, dob, image, address, phoneNumber } =
      req.body
    if (!(owner && email && password)) {
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
        owner,
        email,
        dob,
        image,
        address,
        phoneNumber,
        password: encryptedPassword,
      })
      let token = await data.getToken()
      res.json({ token, owner: data })
    }
  } catch (error) {
    res.status(500).send(error)
  }
}

const updateOwner = async (req, res) => {
  const { owner, email, password } = req.body
  const ownerId = req.owner._id
  if (!(owner || email || password)) {
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
    let userData = await updateOwnerService(ownerId, data)
    let token = await userData.getToken()
    res.json({ token, owner: userData })
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
  loginOwner,
  signUpOwner,
  updateOwner,
}
