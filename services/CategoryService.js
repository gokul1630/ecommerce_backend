const { findByIdAndUpdate } = require('../models/CategoriesModel')
const Category = require('../models/CategoriesModel')

exports.getCategoryService = async (categoryId) => {
  if (categoryId) return await Category.findById(categoryId)
  Category.find()
}

exports.addCategoryService = async (category) => {
  return await Category.create(category)
}

exports.updateCategoryService = async (categoryId, data) => {
  return await Category, findByIdAndUpdate(categoryId, data, { new: true })
}

exports.deleteCategoryService = async (categoryId) => {
  return await Category.findByIdAndDelete(categoryId)
}