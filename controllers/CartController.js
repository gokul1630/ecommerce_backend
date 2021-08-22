const {
  getAllItemsService,
  addNewItemService,
  updateCartItemService,
  deleteCartItemService,
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
    const product = await getAllItemsService(req.user._id)
    if (Object.keys(product.cartList).length !== 0) {
      product.cartList.forEach(async (item) => {
        if (item._id.toString() === req.body._id) {
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
    const cartItem = await addNewItemService({ ...req.body })
    const cart = await addCartItemsToUser(req.user._id, cartItem._id)
    if (cart && cartItem) {
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
