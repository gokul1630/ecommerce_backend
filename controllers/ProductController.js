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
      res.status(405).send({ message: "You aren't Authorised" })
    }
  } catch (error) {
    console.log(error)
  }
}
const getProducts = async (req, res) => {
  let products
  try {
    if (Object.keys(req.query).length !== 0) {
      products = await getAllProductService({ ...req.query })
    } else {
      products = await getAllProductService()
    }
    if (products) {
      res.json(products)
    }
  } catch (error) {
    console.log(error)
  }
}

const updateProduct = async (req, res) => {
  try {
    const owner = req.owner
    if (owner) {
      const products = await updateProductService(req.body)
      res.json(products)
    } else {
      res.status(405).send({ message: "You aren't Authorised" })
    }
  } catch (error) {
    console.log(error)
  }
}

const deleteProduct = async (req, res) => {
  try {
    const data = await deleteProductService(req.body)
    res.json(data)
  } catch (error) {
    console.log(error)
  }
}

const getProductByCategory = async (req, res) => {
  try {
    const { categoryId } = req.params
    const data = await getProductsByCategoryService(categoryId)
    res.json(data)
  } catch (error) {
    res.status(400).send({ message: 'Invalid Category' })
  }
}

module.exports = {
  getProducts,
  addProducts,
  updateProduct,
  deleteProduct,
  getProductByCategory,
}
