const jwt = require('jsonwebtoken')
const { findUserService } = require('../services/UserServices')
const { findOwnerService } = require('../services/OwnerService')

const auth = async (req, res, next) => {
  const { authorization } = req.headers
  let token
  if (authorization && authorization.startsWith('Bearer')) {
    token = authorization.split(' ')[1]
  }
  if (!token) return res.status(403).send({ message: 'Auth Token missing' })

  try {
    let { userId, ownerId } = jwt.verify(token, process.env.JWT_SECRET)
    if (!userId && !ownerId) {
      res.status(401).send({ message: 'Invalid Token' })
    }
    if (userId) {
      let user = await findUserService(userId)
      if (!user) {
        return res.status(403).send({ message: "This email isn't registred" })
      }

      req.user = user
      next()
    }
    if (ownerId) {
      let owner = await findOwnerService(ownerId)
      if (!owner) {
        return res.status(403).send({ message: "This email isn't registred" })
      }
      req.owner = owner
      next()
    }
  } catch (error) {
    console.log(error)
  }
}
module.exports = auth
