'use strict'

const express = require('express')

const router = express.Router()

/*router.get('', function (req, res, next) { 
    return res.status(200).json({ message: 'Welcome to shop!' })
})*/

router.use('/v1/api', require('./access'))

module.exports = router