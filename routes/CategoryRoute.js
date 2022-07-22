const router = require('express').Router()
const auth = require('../middlewares/auth')
const {
  getCategoryController,
  getCategoryByIdController,
  addCategoryController,
  updateCategoryController,
  deleteCategoryController,
} = require('../controllers/CategoryController')

router.get('/', auth, getCategoryController)
router.post('/:categoryId', auth, getCategoryByIdController)
router.put('/add', auth, addCategoryController)
router.post('/update', auth, updateCategoryController)
router.delete('/remove', auth, deleteCategoryController)

module.exports = router
