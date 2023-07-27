'use strict'

const express = require('express')
const productController = require('../../controllers/product.controller')
const asyncHandler = require('../../helpers/asyncHandler')
const { authentication } = require('../../auth/authUtils')

const router = express.Router()

router.post('', asyncHandler(productController.createProduct))
// Authentication middleware.
//router.use(authentication)
// Router apply authentication middleware.

module.exports = router