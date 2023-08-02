const express = require('express')
const router = express.Router()
const asyncHandler = require('../../helpers/asyncHandler')
const notificationController = require('../../controllers/notification.controller')
const { authentication } = require("../../auth/authUtils");

// start authentication //
router.use(authentication)
// end authentication //

router.get('', asyncHandler(notificationController.getListNotiByUser))

module.exports = router