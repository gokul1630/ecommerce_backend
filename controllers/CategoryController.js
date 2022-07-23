const {
  CATEGORY_NOT_FOUND,
  CATEGORY_DELETED,
  NOT_AUTHORISED,
} = require('../constants/constants')
const {
  addCategoryService,
  deleteCategoryService,
  updateCategoryService,
  getCategoryService,
} = require('../services/CategoryService')

const getCategoryController = async (req, res) => {
  try {
    let data
    const { categoryId } = req.params
    if (categoryId) {
     data = await getCategoryService(categoryId)
    } else {
      data = await getCategoryService()
    }
    res.json(data)
  } catch (error) {
    res.status(500).send(error)
  }
}

const addCategoryController = async (req, res) => {
  try {
    const { category, image } = req.body
    const owner = req.owner
    if (owner) {
      const data = await addCategoryService({ category, image })
      res.json(data)
    } else {
      res.status(400).send({ message: NOT_AUTHORISED })
    }
  } catch (error) {
    res.status(500).send(error)
  }
}

const deleteCategoryController = async (req, res) => {
  try {
    const { _id } = req.body
    const owner = req.owner
    if (owner) {
      const data = await deleteCategoryService(_id)
      if (data) {
        res.send({ message: CATEGORY_DELETED })
      } else {
        res.status(404).send({ message: CATEGORY_NOT_FOUND })
      }
    } else {
      res.status(400).send({ message: NOT_AUTHORISED })
    }
  } catch (error) {
    res.status(500).send(error)
  }
}

const updateCategoryController = async (req, res) => {
  try {
    const { _id, category, image } = req.body
    const owner = req.owner
    if (owner) {
      const data = await updateCategoryService(_id, { image, category })
      res.json(data)
    } else {
      res.status(400).send({ message: NOT_AUTHORISED })
    }
  } catch (error) {
    res.status(500).send(error)
  }
}

module.exports = {
  getCategoryController,
  addCategoryController,
  updateCategoryController,
  deleteCategoryController,
}
