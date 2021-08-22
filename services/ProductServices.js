const ProductModel = require('../models/ProductModel')

exports.addNewProductService = async function (data) {
  return await ProductModel.create(data)
}

exports.getAllProductService = async function (id) {
  return await ProductModel.find(id)
}
