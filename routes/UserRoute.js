const router = require('express').Router()
const auth = require('../middlewares/auth')
const {
  loginUser,
  signUpUser,
  updateUser,
} = require('../controllers/UserController')

router.post('/login', loginUser)
router.put('/signup', signUpUser)
router.post('/update', auth, updateUser)

module.exports = router
