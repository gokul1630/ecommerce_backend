const {
  getAllProductService,
  addNewProductService,
  updateProductService,
  deleteProductService,
  getProductsByCategoryService,
} = require('../services/ProductServices')

const addProducts = async (req, res) => {
  try {
    const products = await addNewProductService({ ...req.body })
    res.json(products)
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
    const data = await updateProductService(req.body)
    res.json(data)
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
    const { categoryId } = req.body
    const data = await getProductsByCategoryService(categoryId)
    res.json(data)
  } catch (error) {
    res.send()
  }
}

module.exports = {
  getProducts,
  addProducts,
  updateProduct,
  deleteProduct,
  getProductByCategory,
}
