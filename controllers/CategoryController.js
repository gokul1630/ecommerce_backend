const {
  addCategoryService,
  deleteCategoryService,
  updateCategoryService,
  getCategoryService,
} = require('../services/CategoryService')

const getCategoryController = async (_, res) => {
  try {
    const data = await getCategoryService()
    res.json(data)
  } catch (error) {
    res.status(500).send({ message: error })
  }
}

const getCategoryByIdController = async (req, res) => {
  try {
    const { categoryId } = req.body
    const data = await getCategoryService(categoryId)
    res.json(data)
  } catch (error) {
    res.status(500).send({ message: error })
  }
}

const addCategoryController = async (req, res) => {
  try {
    const { category, image } = req.body
    const data = await addCategoryService({ category, image })
    res.json(data)
  } catch (error) {
    res.status(400).send({ message: error })
  }
}

const deleteCategoryController = async (req, res) => {
  try {
    const { categoryId } = req.body
    const data = await deleteCategoryService(categoryId)
    res.json(data)
  } catch (error) {
    res.status(404).status({ error })
  }
}

const updateCategoryController = async (req, res) => {
  try {
    const { categoryId, image } = req.body
    const data = await updateCategoryService(categoryId, { image })
  } catch (error) {}
}

module.exports = {
  getCategoryController,
  getCategoryByIdController,
  addCategoryController,
  updateCategoryController,
  deleteCategoryController,
}
