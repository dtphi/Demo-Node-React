'use strict'

const mongoose = require('mongoose')

const connectionStr = 'mongodb://localhost:27017/shop'

mongoose.connect(connectionStr)
  .then(_ => { console.log('connection to mongodb') })
  .catch(err => { console.log('Connection error') })

// For dev
if (1 === 1) {
  mongoose.set('debug', true)
  mongoose.set('debug', { color: true })
}

module.exports = mongoose
