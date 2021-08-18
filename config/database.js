const mongoose = require('mongoose')

const URL = process.env.MONGO_URL || ''

const configs = { useUnifiedTopology: true, useNewUrlParser: true }

module.exports = connect = async () => {
  mongoose.connect(URL, configs)
  const database = mongoose.connection

  database.once('open', () => {
    console.log('Database Connected')
  })

  database.on('error', console.error.bind(console, 'Error'))
}
