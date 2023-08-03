const express = require('express')
const router = express.Router()
const asyncHandler = require('../../helpers/asyncHandler')
const CartController = require('../../controllers/cart.controller')
const { authentication } = require("../../auth/authUtils")

// start authentication //
//router.use(authentication)
// end authentication //

router.post('', asyncHandler(CartController.addToCart))
router.get('', asyncHandler(CartController.listToCart))
router.post('', asyncHandler(CartController.update))
router.delete('', asyncHandler(CartController.delete))

module.exports = router