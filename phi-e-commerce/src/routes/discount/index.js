'use strict'

const express = require('express')
const discountController = require('../../controllers/discount.controller')
const asyncHandler = require('../../helpers/asyncHandler')
const { authentication } = require('../../auth/authUtils')

const router = express.Router()

// get discount
router.post('/amount', asyncHandler(discountController.getAllDiscountAmount))
router.get('/list_product_code', asyncHandler(discountController.getAllDiscountCodesWithProduct))

// Authentication middleware.
router.use(authentication)

// create discount
router.post('', asyncHandler(discountController.createDiscountCode))
router.get('', asyncHandler(discountController.getDiscountCodes))

module.exports = router