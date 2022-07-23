const router = require('express').Router()
const auth = require('../middlewares/auth')
const {
  addProducts,
  getProducts,
  updateProduct,
  deleteProduct,
  getProductByCategory,
} = require('../controllers/ProductController')

router.get('/:productId?', getProducts)
router.post('/update', auth, updateProduct)
router.get('/:categoryId', getProductByCategory)
router.put('/add', auth, addProducts)
router.delete('/remove', auth, deleteProduct)

module.exports = router
