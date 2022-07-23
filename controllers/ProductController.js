const {
  NOT_AUTHORISED,
  PRODUCT_DELETED,
  PRODUCT_NOT_FOUND,
} = require('../constants/constants')
const {
  getAllProductService,
  addNewProductService,
  updateProductService,
  deleteProductService,
  getProductsByCategoryService,
} = require('../services/ProductServices')

const addProducts = async (req, res) => {
  try {
    const owner = req.owner
    if (owner) {
      const products = await addNewProductService({ ...req.body })
      res.json(products)
    } else {
      res.status(405).send({ message: NOT_AUTHORISED })
    }
  } catch (error) {
    res.status(500).send(error)
  }
}
const getProducts = async (req, res) => {
  let products
  try {
    const { productId } = req.params
    if (productId) {
      products = await getAllProductService(productId)
    } else {
      products = await getAllProductService()
    }
    if (products) {
      res.json(products)
    } else {
      res.status(404).send({ message: PRODUCT_NOT_FOUND })
    }
  } catch (error) {
    res.status(500).send(error)
  }
}

const updateProduct = async (req, res) => {
  try {
    const owner = req.owner
    const { _id } = req.body
    if (owner) {
      const products = await updateProductService(_id, req.body)
      res.json(products)
    } else {
      res.status(405).send({ message: NOT_AUTHORISED })
    }
  } catch (error) {
    res.status(500).send(error)
  }
}

const deleteProduct = async (req, res) => {
  try {
    const owner = req.owner
    const { _id } = req.body
    if (owner) {
      const data = await deleteProductService(_id)
      if (data) {
        res.json({ message: PRODUCT_DELETED })
      } else {
        res.status(404).send({ message: PRODUCT_NOT_FOUND })
      }
    } else {
      res.status(405).send({ message: NOT_AUTHORISED })
    }
  } catch (error) {
    res.status(500).send(error)
  }
}

const getProductByCategory = async (req, res) => {
  try {
    const { categoryId } = req.params
    const data = await getProductsByCategoryService(categoryId)
    res.json(data)
  } catch (error) {
    res.status(500).send(error)
  }
}

module.exports = {
  getProducts,
  addProducts,
  updateProduct,
  deleteProduct,
  getProductByCategory,
}
