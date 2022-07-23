const router = require('express').Router()
const auth = require('../middlewares/auth')
const {
  getCategoryController,
  addCategoryController,
  updateCategoryController,
  deleteCategoryController,
} = require('../controllers/CategoryController')

router.get('/:categoryId?', auth, getCategoryController)
router.put('/add', auth, addCategoryController)
router.post('/update', auth, updateCategoryController)
router.delete('/remove', auth, deleteCategoryController)

module.exports = router
