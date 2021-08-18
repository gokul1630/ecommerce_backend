const router = require('express').Router()
const auth = require('../middlewares/auth')
const {
  addProducts,
  getProducts,
} = require('../controllers/ProductController')

router.get('/getProducts', auth, getProducts)
router.put('/addProducts', auth, addProducts)

module.exports = router
