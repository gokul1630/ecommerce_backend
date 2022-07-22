const ProductModel = require('../models/ProductModel')

exports.addNewProductService = async (data) => {
  return await ProductModel.create(data)
}

exports.getAllProductService = async (id) => {
  return await ProductModel.find(id)
}

exports.updateProductService = async (data) => {
  return await ProductModel.findByIdAndUpdate(data._id, data, { new: true })
}

exports.deleteProductService = async (data) => {
  return await ProductModel.findByIdAndDelete(data._id)
}

exports.getProductsByCategoryService = async (categoryId) => {
  return await ProductModel.findOne({ categoryId })
}
