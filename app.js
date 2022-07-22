require('dotenv').config()
const express = require('express')
const app = express()
const connect = require('./config/database')
const cartRoute = require('./routes/CartRoute')
const userRoute = require('./routes/UserRoute')
const productRoute = require('./routes/ProductRoute')
const cors = require('cors')

app.use(cors())
app.use(express.json())
const port = process.env.PORT || 1234

app.use('/api/v1/product', productRoute)
app.use('/api/v1/cart', cartRoute)
app.use('/api/v1/user', userRoute)

app.listen(port, async () => {
  await connect(port)
})
