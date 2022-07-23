const jwt = require('jsonwebtoken')
const { findUserService } = require('../services/UserServices')
const { findOwnerService } = require('../services/OwnerService')
const {
  EMAIL_NOT_REGISTRED,
  MISSED_TOKEN,
  INVALID_TOKEN,
} = require('../constants/constants')

const auth = async (req, res, next) => {
  const { authorization } = req.headers
  let token
  if (authorization && authorization.startsWith('Bearer')) {
    token = authorization.split(' ')[1]
  }
  if (!token) return res.status(403).send({ message: MISSED_TOKEN })

  try {
    let { userId, ownerId } = jwt.verify(token, process.env.JWT_SECRET)
    if (!userId && !ownerId) {
      res.status(401).send({ message: INVALID_TOKEN })
    }
    if (userId) {
      let user = await findUserService(userId)
      if (!user) {
        return res.status(403).send({ message: EMAIL_NOT_REGISTRED })
      }

      req.user = user
      next()
    }
    if (ownerId) {
      let owner = await findOwnerService(ownerId)
      if (!owner) {
        return res.status(403).send({ message: EMAIL_NOT_REGISTRED })
      }
      req.owner = owner
      next()
    }
  } catch (error) {
    res.status(500).send(error)
  }
}
module.exports = auth
