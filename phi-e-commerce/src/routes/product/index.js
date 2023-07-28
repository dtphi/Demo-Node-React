'use strict'

const express = require('express')
const productController = require('../../controllers/product.controller')
const asyncHandler = require('../../helpers/asyncHandler')
const { authentication } = require('../../auth/authUtils')

const router = express.Router()

router.post('/search/:keySearch', asyncHandler(productController.getListSearchProduct))

// Authentication middleware.
router.use(authentication)
// Router apply authentication middleware.
router.post('', asyncHandler(productController.createProduct))
router.post('/public/:id', asyncHandler(productController.publicProductByShop))
router.post('/unpublic/:id', asyncHandler(productController.unPublicProductByShop))

router.post('/draft/all', asyncHandler(productController.getAllDraftsForShop))
router.post('/public/all', asyncHandler(productController.getAllPublicForShop))

module.exports = router
