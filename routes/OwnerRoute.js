const router = require('express').Router()
const auth = require('../middlewares/auth')
const {
  loginOwner,
  signUpOwner,
  updateOwner,
} = require('../controllers/OwnerController')

router.post('/login', loginOwner)
router.put('/signup', signUpOwner)
router.patch('/update', auth, updateOwner)

module.exports = router
