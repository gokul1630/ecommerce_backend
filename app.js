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

app.use('/product', productRoute)
app.use('/cart', cartRoute)
app.use('/user', userRoute)

app.listen(port, async () => {
  await connect()
  console.log(`server listening on http://localhost:${port}`)
})
