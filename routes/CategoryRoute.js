const router = require('express').Router()
const auth = require('../middlewares/auth')
const {
  getCategoryController,
  getCategoryControllerById,
  addCategoryController,
  updateCategoryController,
  deleteCategoryController,
} = require('../controllers/CategoryController')

router.post('/getCategory', auth, getCategoryController)
router.post('/getCategoryById', auth, getCategoryControllerById)
router.post('/addCategory', auth, addCategoryController)
router.post('/addCategory', auth, addCategoryController)
router.post('/updateCategory', auth, updateCategoryController)
router.post('/deleteCategory', auth, deleteCategoryController)
