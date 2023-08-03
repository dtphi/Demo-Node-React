const express = require('express')
const router = express.Router()
const asyncHandler = require('../../helpers/asyncHandler')
const CheckoutController = require('../../controllers/checkout.controller')
const { authentication } = require("../../auth/authUtils")

// start authentication //
//router.use(authentication)
// end authentication //

router.post('/review', asyncHandler(CheckoutController.checkoutReview))

module.exports = router