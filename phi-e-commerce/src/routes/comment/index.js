const express = require('express')
const router = express.Router()
const asyncHandler = require('../../helpers/asyncHandler')
const CommentController = require('../../controllers/comment.controller')
const { authentication } = require("../../auth/authUtils");

// start authentication //
router.use(authentication)
// end authentication //

router.post('', asyncHandler(CommentController.createComment))
router.get('', asyncHandler(CommentController.getCommentsByParentId))
router.delete('', asyncHandler(CommentController.deleteComment))

module.exports = router