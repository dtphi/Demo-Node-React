'use strict'

const express = require('express')
const accessController = require('../../controllers/access.controller')
const asyncHandler = require('../../helpers/asyncHandler')
const { authentication } = require('../../auth/authUtils')

const router = express.Router()
// Sign up.
router.post('/shop/signup', asyncHandler(accessController.signUp))
router.post('/shop/login', asyncHandler(accessController.login))
// Authentication middleware.
router.use(authentication)
// Router apply authentication middleware.
router.post('/shop/logout', asyncHandler(accessController.logout))
router.post('/shop/handlerRefreshToken', asyncHandler(accessController.handlerRefreshToken))

module.exports = router
