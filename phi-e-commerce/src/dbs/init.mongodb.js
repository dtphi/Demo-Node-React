'use strict'

const mongoose = require('mongoose')
const { app, db: { host, name, port, mongodb } } = require('../configs/config.mongodb')
const connectionStr = `${mongodb}/shopDev`
// const connectionStrLocal = `mongodb://${host}:${port}/${name}`
const { countConnect } = require('../helpers/check.connect')
class Database {
  /**
     * Constructor function for Database.
     */
  constructor () {
    this.connect()
  }

  /**
     * Connect to the database
     */
  connect (type = 'mongodb') {
    if (1 === 1) {
      mongoose.set('debug', true)
      mongoose.set('debug', { color: true })
    }
    mongoose.connect(connectionStr, {
      maxPoolSize: 50
    })
      .then(_ => { console.log('connection to mongodb success PRO', countConnect()) })
      .catch(err => { console.log('Connection error', err) })
  }

  /**
     * Connect to the database with the singleton pattern specified
     * @returns
     */
  static getInstance () {
    if (!Database.instance) {
      Database.instance = new Database()
    }
    return Database.instance
  }
}

const instanceDatabase = Database.getInstance()
module.exports = instanceDatabase
