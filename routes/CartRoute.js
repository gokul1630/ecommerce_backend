const router = require('express').Router()
const auth = require('../middlewares/auth')
const {
  getItems,
  addNewItem,
  updateCartItem,
  deleteCartItem,
} = require('../controllers/CartController')

router.get('/', auth, getItems)
router.put('/add', auth, addNewItem)
router.post('/update', auth, updateCartItem)
router.delete('/remove', auth, deleteCartItem)

module.exports = router
