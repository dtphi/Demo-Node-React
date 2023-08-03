const express = require('express')
const router = express.Router()
const asyncHandler = require('../../helpers/asyncHandler')
const InventoryController = require('../../controllers/inventory.controller')
const { authentication } = require("../../auth/authUtils")

// start authentication //
router.use(authentication)
// end authentication //

router.post('/', asyncHandler(InventoryController.addStockToInventory))

module.exports = router