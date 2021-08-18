const {
  getAllProductService,
  addNewProductService,
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
  try {
    const products = await getAllProductService()
    if (products) {
      res.json(products)
    }
  } catch (error) {
      console.log(error)
  }
}

module.exports = { getProducts, addProducts }
