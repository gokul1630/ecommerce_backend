const router = require('express').Router()
const auth = require('../middlewares/auth')
const {
  addProducts,
  getProducts,
  updateProduct,
  deleteProduct,
} = require('../controllers/ProductController')

router.get('/getProducts', auth, getProducts)
router.put('/addProducts', auth, addProducts)
router.patch('/updateProduct', auth, updateProduct)
router.delete('/deleteProduct', auth, deleteProduct)

module.exports = router
