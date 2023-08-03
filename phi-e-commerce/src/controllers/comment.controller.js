'use strict'

const CommentService = require('../services/comment.service')
const { SuccessResponse } = require('../core/success.response')

class CommentController {
  /**
   *
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  createComment = async (req, res, next) => {
    new SuccessResponse({
      message: 'Create comment success',
      metadata: await CommentService.createComment(req.body)
    }).send(res)
  }

  /**
   *
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  getCommentsByParentId = async (req, res, next) => {
    new SuccessResponse(res, 'Get comment success', await CommentService.getCommentsByParentId(req.query))
  }

  /**
   *
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  deleteComment = async (req, res, next) => {
    new SuccessResponse(res, 'Delete comment success', await CommentService.deleteComment(req.query))
  }
}

module.exports = new CommentController()
