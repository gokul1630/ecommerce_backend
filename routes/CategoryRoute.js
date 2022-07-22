const router = require('express').Router()
const auth = require('../middlewares/auth')
const {
  getCategoryController,
  getCategoryControllerById,
  addCategoryController,
  updateCategoryController,
  deleteCategoryController,
} = require('../controllers/CategoryController')

router.get('/getCategory', auth, getCategoryController)
router.post('/getCategoryById', auth, getCategoryControllerById)
router.put('/addCategory', auth, addCategoryController)
router.post('/updateCategory', auth, updateCategoryController)
router.delete('/deleteCategory', auth, deleteCategoryController)

module.exports = router
