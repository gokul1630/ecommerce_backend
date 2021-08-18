const {
  getAllItemsService,
  addNewItemService,
} = require('../services/CartServices')
const { addCartItemsToUser } = require('../services/UserServices')

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
    const cartItem = await addNewItemService({ ...req.body })
    const cart = await addCartItemsToUser(req.user._id, cartItem._id)
    if (cart && cartItem) {
      res.json(cartItem)
    }
  } catch (error) {
    res.status(400).send(error)
  }
}

module.exports = {
  getItems,
  addNewItem,
}
