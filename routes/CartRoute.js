const router = require('express').Router()
const auth = require('../middlewares/auth')
const {
  getItems,
  addNewItem,
  updateCartItem,
  deleteCartItem,
} = require('../controllers/CartController')

router.get('/getItems', auth, getItems)
router.post('/addNewItem', auth, addNewItem)
router.patch('/updateCartItem', updateCartItem)
router.delete('/deleteCartItem', deleteCartItem)

module.exports = router
