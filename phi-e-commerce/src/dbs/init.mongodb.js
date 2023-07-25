'use strict'

const mongoose = require('mongoose')
const { db: { host, name, port, user, pass }} = require('../configs/config.mongodb')
const connectionStr = `mongodb+srv://${user}:${pass}@${name}.lkpls3w.mongodb.net/shopDev`
const connectionStrLocal = `mongodb://${host}:${port}/${name}`
const { countConnect } = require('../helpers/check.connect')
class Database {
    /**
     * Constructor function for Database.
     */
    constructor() {
        this.connect()
    }
    /**
     * Connect to the database
     */
    connect(type = 'mongodb') {
        if (1 === 1) {
            mongoose.set('debug', true)
            mongoose.set('debug', { color: true })
        }
        mongoose.connect(connectionStr, {
            maxPoolSize: 50
        })
        .then( _ => { console.log('connection to mongodb success PRO', countConnect()) })
        .catch( err => { console.log('Connection error') })
    }

    /**
     * Connect to the database with the singleton pattern specified
     * @returns 
     */
    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database()
        }
        return Database.instance
    }
}

const instanceDatabase = Database.getInstance()
module.exports = instanceDatabase