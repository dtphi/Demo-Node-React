const CommentService = require('../services/comment.service')
const { SuccessResponse } = require("../core/success.response")

class CommentController {
    createComment = async (req, res, next) => {
        new SuccessResponse({
            message: "Create comment success",
            metadata: await CommentService.createComment(req.body)
        }).send(res)
    }

    getCommentsByParentId = async (req, res, next) => {
        new SuccessResponse(res, "Get comment success", await CommentService.getCommentsByParentId(req.query))
    }

    deleteComment = async (req, res, next) => {
        new SuccessResponse(res, "Delete comment success", await CommentService.deleteComment(req.query))
    }
}

module.exports = new CommentController()