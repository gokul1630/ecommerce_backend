const router = require('express').Router()
const auth = require('../middlewares/auth')
const { getItems, addNewItem } = require('../controllers/CartController')

router.get('/getItems', auth, getItems)
router.post('/addNewItem', auth, addNewItem)

module.exports = router
