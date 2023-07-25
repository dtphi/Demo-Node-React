require('dotenv').config()
const compression = require('compression')
const express = require('express');
const morgan = require('morgan');
const { default: helmet } = require('helmet');

const app = express();

// Init middleware
/**
 * app.use(morgan('compiled'));
 * app.use(morgan('short'));
 * .... https://www.npmjs.com/package/morgan
 */
app.use(morgan('dev')) // log server:  GET / 200 3.255 ms - 47

/**
 * Helmet helps secure avoiding from attack out of.
 * .... https://www.npmjs.com/package/helmet
 */
app.use(helmet())

/**
 * Compress data to client browser.
 * .... https://www.npmjs.com/package/compression
 */
app.use(compression())

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

// Init database
require('./dbs/init.mongodb')
const { checkOverload } = require('./helpers/check.connect')
//checkOverload()
// Init routes

/**
 * Test Compression send file to client browser.
 */
/*app.get('/', (req, res, next) => {
    //const strCompress = "Hello world"
    return res.status(200).json({
        message: 'Welcome to the e-commerce website',
        //metadata: strCompress.repeat(10000)
    })
})*/
app.use('/', require('./routes'))

// Init error handlers
//console.log(process.env)
module.exports = app