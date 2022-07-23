const {
  CART_IS_EMPTY,
  ITEM_ALREDY_IN_CART,
  ITEM_DELETED,
  ITEM_NOT_FOUND,
} = require('../constants/constants')
const {
  getAllItemsService,
  addCartItemService,
  updateCartItemService,
  deleteCartItemService,
} = require('../services/CartServices')

const getItems = async (req, res) => {
  const { _id } = req.user
  try {
    const cartItems = await getAllItemsService(_id)
    if (cartItems) {
      res.json(cartItems)
    } else {
      res.status(404).send({ message: CART_IS_EMPTY })
    }
  } catch (error) {
    res.status(500).send(error)
  }
}

const addNewItem = async (req, res) => {
  try {
    const { _id } = req.body
    const product = await getAllItemsService(_id)
    if (product.length) {
      product.forEach((item) => {
        if (item._id.toString() === _id) {
          res.status(409).send({ message: ITEM_ALREDY_IN_CART })
        } else {
          addNewItemtoCart(req, res)
        }
      })
    } else {
      addNewItemtoCart(req, res)
    }
  } catch (error) {
    res.status(500).send(error)
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
    res.status(500).send(error)
  }
}

const updateCartItem = async (req, res) => {
  try {
    const cartItem = await updateCartItemService(req.body)
    if (cartItem) {
      res.json(cartItem)
    }
  } catch (error) {
    res.status(500).send(error)
  }
}

const deleteCartItem = async (req, res) => {
  try {
    const cartItem = await deleteCartItemService(req.body._id)
    if (cartItem) {
      res.send({ message: ITEM_DELETED })
    } else {
      res.status(404).send({ message: ITEM_NOT_FOUND })
    }
  } catch (error) {
    res.status(500).send(error)
  }
}

module.exports = {
  getItems,
  addNewItem,
  updateCartItem,
  deleteCartItem,
}
