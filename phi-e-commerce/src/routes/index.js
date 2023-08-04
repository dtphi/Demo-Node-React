'use strict'

const express = require('express')
const { apiKey, checkPermission } = require('../auth/checkAuth')
const { pushToLogDiscord } = require('../middlewares')

const router = express.Router()

// add log to discord
router.use(pushToLogDiscord)
// check api key.
router.use(apiKey)
// check permissions
router.use(checkPermission('0000'))
/* router.get('', function (req, res, next) {
    return res.status(200).json({ message: 'Welcome to shop!' })
}) */

router.use('/v1/api/checkout', require('./checkout'))
router.use('/v1/api/cart', require('./cart'))
router.use('/v1/api/notification', require('./notification'))
router.use('/v1/api/inventory', require('./inventory'))
router.use('/v1/api/discount', require('./discount'))
router.use('/v1/api/comment', require('./comment'))
router.use('/v1/api/product', require('./product'))
router.use('/v1/api', require('./access'))

module.exports = router
