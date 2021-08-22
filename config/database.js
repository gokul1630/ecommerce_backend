const mongoose = require('mongoose')

const URL = process.env.MONGO_URL || ''

const configs = { useUnifiedTopology: true, useNewUrlParser: true }

module.exports = connect = async (port) => {
  mongoose.connect(URL, configs)
  const database = mongoose.connection

  database.once('open', () => {
    console.log('Database Connected')
    console.log(`Server Listening on http://${database.host}:${port}`)
  })

  database.on('error', console.error.bind(console, 'Error'))
}
