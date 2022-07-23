const ProductModel = require('../models/ProductModel')

exports.addNewProductService = async (data) => {
  return await ProductModel.create(data)
}

exports.getAllProductService = async (id) => {
  if (id) return await ProductModel.findById(id)
  return await ProductModel.find()
}

exports.updateProductService = async (productId,data) => {
  return await ProductModel.findByIdAndUpdate(productId, data, { new: true })
}

exports.deleteProductService = async (productId) => {
  return await ProductModel.findByIdAndDelete(productId)
}

exports.getProductsByCategoryService = async (categoryId) => {
  return await ProductModel.find({ categoryId })
}
