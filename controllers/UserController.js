const bcrypt = require('bcrypt')
const {
  signUpService,
  signInService,
  updateUserService,
} = require('../services/UserServices')

const loginUser = async (req, res) => {
  const { email, password } = req.body
  if (!(email && password)) {
    res.status(403).send({
      message: 'Please provide All Required Fields',
    })
  }
  try {
    const user = await signInService(email)
    if (user) {
      const passwordMatch = await user.checkPassword(password)
      if (!passwordMatch) {
        res.status(403).send({ message: "Password doesn't match" })
      } else {
        let token = await user.getToken()
        res.status(200).json({ token: token, user: user })
      }
    } else {
      res.status(403).send({ message: "Email isn't registred yet" })
    }
  } catch (error) {
    console.log(error)
  }
}

const signUpUser = async (req, res) => {
  const { user, email, password } = req.body
  if (!(user && email && password)) {
    res.status(403).send({
      message: 'Please provide All Required Fields',
    })
  }
  try {
    if (checkEmail(email)) {
      res.status(400).send({ message: 'Provide Valid Email' })
    } else if (checkPassword(password)) {
      res.status(400).send({
        message:
          'Password must be Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character',
      })
    } else {
      let encryptedPassword = await bcrypt.hash(password, 10)
      let data = await signUpService(user, email, encryptedPassword)
      let token = await data.getToken()
      res.json({ token: token, user: data })
    }
  } catch (error) {
    console.log(error)
  }
}

const updateUser = async (req, res) => {
  const { user, email, password } = req.body
  const userId = req.user._id
  if (!(user || email || password)) {
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
      user: user,
      email: email,
      password: encryptedPassword,
    }
    let userData = await updateUserService(userId, data)
    let token = await userData.getToken()
    res.json({ token: token, user: userData })
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
  loginUser,
  signUpUser,
  updateUser,
}
