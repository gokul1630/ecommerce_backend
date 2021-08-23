const ProductModel = require('../models/ProductModel')

exports.addNewProductService = async function (data) {
  return await ProductModel.create(data)
}

exports.getAllProductService = async function (id) {
  return await ProductModel.find(id)
}

exports.updateProductService = async function (data) {
  return await ProductModel.findByIdAndUpdate(data._id, data, { new: true })
}

exports.deleteProductService = async function (data) {
  return await ProductModel.findByIdAndDelete(data._id)
}
