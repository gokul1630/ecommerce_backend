const router = require('express').Router()
const auth = require('../middlewares/auth')
const {
  loginUser,
  signUpUser,
  updateUser,
} = require('../controllers/UserController')

router.post('/loginUser', loginUser)
router.put('/signUpUser', signUpUser)
router.patch('/updateUser', auth, updateUser)

module.exports = router
