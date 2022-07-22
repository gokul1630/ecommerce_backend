const {
  getAllItemsService,
  addCartItemService,
  updateCartItemService,
  deleteCartItemService,
} = require('../services/CartServices')
const { addCartItems } = require('../services/CartServices')

const getItems = async (req, res) => {
  const { _id } = req.user
  try {
    const cartItems = await getAllItemsService(_id)
    if (cartItems) {
      res.json(cartItems.cartList)
    } else {
      res.status(404).send({ message: 'Cart is Empty' })
    }
  } catch (error) {
    res.status(403).send(error.message)
  }
}

const addNewItem = async (req, res) => {
  try {
    const { _id } = req.body
    const product = await getAllItemsService(_id)
    if (product.length) {
      product.forEach((item) => {
        if (item._id.toString() === _id) {
          res.status(409).send({ message: 'Item Already Added To Cart' })
        } else {
          addNewItemtoCart(req, res)
        }
      })
    } else {
      addNewItemtoCart(req, res)
    }
  } catch (error) {
    console.log(error)
  }
}

const addNewItemtoCart = async (req, res) => {
  try {
    const { _id } = req.user
    const data = {
      ...req.body,
      userId: _id,
    }
    const cartItem = await addCartItemService(data)
    if (cartItem) {
      res.json(cartItem)
    }
  } catch (error) {
    console.log(error)
  }
}

const updateCartItem = async (req, res) => {
  try {
    const cartItem = await updateCartItemService(req.body)
    if (cartItem) {
      res.json(cartItem)
    }
  } catch (error) {
    console.log(error)
  }
}

const deleteCartItem = async (req, res) => {
  try {
    const cartItem = await deleteCartItemService(req.body._id)
    if (cartItem) {
      res.send('Item Deleted')
    }
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getItems,
  addNewItem,
  updateCartItem,
  deleteCartItem,
}
