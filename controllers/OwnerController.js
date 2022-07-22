const bcrypt = require('bcrypt')
const {
  signUpService,
  signInService,
  updateOwnerService,
} = require('../services/OwnerService')

const loginOwner = async (req, res) => {
  const { email, password } = req.body
  if (!(email && password)) {
    res.status(403).send({
      message: 'Please provide All Required Fields',
    })
  }
  try {
    const owner = await signInService(email)
    if (owner) {
      const passwordMatch = await owner.checkPassword(password)
      if (!passwordMatch) {
        res.status(403).send({ message: "Password doesn't match" })
      } else {
        let token = await owner.getToken()
        res.status(200).json({ token, owner })
      }
    } else {
      res.status(403).send({ message: "Email isn't registred yet" })
    }
  } catch (error) {
    console.log(error)
  }
}

const signUpOwner = async (req, res) => {
  try {
    const { owner, email, password, dob, image, address, phoneNumber } =
      req.body
    if (!(owner && email && password)) {
      res.status(403).send({
        message: 'Please provide All Required Fields',
      })
    } else if (checkEmail(email)) {
      res.status(400).send({ message: 'Provide Valid Email' })
    } else if (checkPassword(password)) {
      res.status(400).send({
        message:
          'Password must be Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character',
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
    console.log(error)
  }
}

const updateOwner = async (req, res) => {
  const { owner, email, password } = req.body
  const ownerId = req.owner._id
  if (!(owner || email || password)) {
    res.status(403).send({
      message: 'Please provide All Required Fields',
    })
  } else if (checkEmail(email)) {
    res.status(400).send({ message: 'Provide Valid Email' })
  } else if (checkPassword(password)) {
    res.status(400).send({
      message:
        'Password must be Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character',
    })
  } else {
    let encryptedPassword = await bcrypt.hash(password, 10)
    let data = {
      ...req.body,
      password: encryptedPassword,
    }
    let userData = await updateOwnerService(ownerId, data)
    let token = await userData.getToken()
    res.json({ token: token, owner: userData })
  }
}

const checkEmail = (email) => {
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const emailTest = emailRegex.test(String(email).toLowerCase())
  return !emailTest
}
const checkPassword = (password) => {
  const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/
  const passwordTest = passwordRegex.test(password)
  return !passwordTest
}

module.exports = {
  loginOwner,
  signUpOwner,
  updateOwner,
}
