'use strict'

const express = require('express')
const { apiKey, checkPermission } = require('../auth/checkAuth')

const router = express.Router()

// check api key.
router.use(apiKey)
// check permissions
router.use(checkPermission('0000'))
/*router.get('', function (req, res, next) { 
    return res.status(200).json({ message: 'Welcome to shop!' })
})*/

router.use('/v1/api', require('./access'))

module.exports = router