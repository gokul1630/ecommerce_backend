const router = require('express').Router()
const auth = require('../middlewares/auth')
const {
  addProducts,
  getProducts,
  updateProduct,
  deleteProduct,
  getProductByCategory
} = require('../controllers/ProductController')

router.get('/getProducts', auth, getProducts)
router.get('/getProductsByCategory', auth, getProductByCategory)
router.put('/addProducts', auth, addProducts)
router.patch('/updateProduct', auth, updateProduct)
router.delete('/deleteProduct', auth, deleteProduct)

module.exports = router
