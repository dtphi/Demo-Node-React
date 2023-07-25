'use strict'

const mongoose = require('mongoose')

const connectionStr = 'mongodb+srv://dtphikhtn:ry56MxEAWbuucn9u@shop.lkpls3w.mongodb.net/'

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
        mongoose.connect(connectionStr)
        .then( _ => { console.log('connection to mongodb') })
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