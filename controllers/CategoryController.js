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
    res.status(500).send(error)
  }
}

const addCategoryController = async (req, res) => {
  try {
    const { category, image } = req.body
    const data = await addCategoryService({ category, image })
    res.json(data)
  } catch (error) {
    res.status(500).send(error)
  }
}

const deleteCategoryController = async (req, res) => {
  try {
    const { categoryId } = req.body
    const data = await deleteCategoryService(categoryId)
    res.json(data)
  } catch (error) {
    res.status(500).send(error)
  }
}

const updateCategoryController = async (req, res) => {
  try {
    const { categoryId, image } = req.body
    const data = await updateCategoryService(categoryId, { image })
    res.json(data)
  } catch (error) {
    res.status(500).send(error)
  }
}

module.exports = {
  getCategoryController,
  getCategoryByIdController,
  addCategoryController,
  updateCategoryController,
  deleteCategoryController,
}
