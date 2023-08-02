'use strict'

const { NotFoundError } = require("../core/error.response")
const ProductService = require("./product.service")
const {
    findById,
    findParentById,
    findListByParentId,
    findListByParentLeftRight,
    findOneCommentRight,
    saveInstance,
    updateManyCommentLeftGreaterThanCommentRight,
    updateManyCommentRightGreaterThanOrEqualCommentRight,
    updateManyCommentLeftGreaterThanDown,
    updateManyCommentRightGreaterThanDown,
    deleteManyCommentLeftBetweenLeftRightValue,
} = require('../models/repositories/comment.repo')

/**
 * key features: Comment service
 * - add comment [User, Shop]
 * - get a list of comment [User, Shop]
 * - delete a comment [User, Shop , Admin]
 */
class CommentService {

    /**
     * Create comment service.
     * @param {*} param0 
     * @returns 
     */
    static async createComment({ productId, userId, content, parentCommentId = null }) {
        await this.validateProductExists(productId)

        let rightValue = 0
        // 1 cell there are 2 lines left and right.
        if (parentCommentId) {
            // reply comment
            const parentComment = await findParentById(parentCommentId)
            if (!parentComment) throw new NotFoundError('Parent comment not found')

            // update rightValue with parentComment.comment_right
            rightValue = parentComment.comment_right

            // updateMany comments right
            await updateManyCommentRightGreaterThanOrEqualCommentRight(productId, rightValue, 2)

            // updateMany comments left
            await updateManyCommentLeftGreaterThanCommentRight(productId, rightValue, 2)

        } else {
            const maxRightValue = await findOneCommentRight(productId)

            if (maxRightValue) {
                rightValue = maxRightValue.comment_right + 1
            } else {
                rightValue = 1
            }
        }

        // insert to comment
        const commentModel = await saveInstance(productId, userId, content, parentCommentId, rightValue, (rightValue + 1))

        return commentModel
    }

    /**
     * 
     * @param {*} param0 
     * @returns 
     */
    static async getCommentsByParentId({ productId, parentCommentId = null, limit = 50, offset = 0 }) {
        if (parentCommentId) {
            const parent = await findParentById(parentCommentId)
            if (!parent) throw new NotFoundError('Not found comment for product')

            return findListByParentLeftRight(productId, parent, limit, offset)
        }

        return findListByParentId(productId, parentCommentId, limit, offset)
    }

    /**
     * Validate existing product.
     * @param {*} productId 
     */
    static async validateProductExists(productId) {
        // check product exists in the database
        const foundProduct = await ProductService.findProductById(productId)
        if (!foundProduct) throw NotFoundError('Product not found')
    }

    /**
     * Delete the comment.
     * @param {*} param0 
     * @returns 
     */
    static async deleteComment({ productId, commentId }) {
        await this.validateProductExists(productId)

        // detect left and right of commentId
        const comment = await findById(commentId)
        if (!comment) throw NotFoundError('Comment not found')

        // get left, right
        const leftValue = comment.comment_left
        const rightValue = comment.comment_right

        // cal width
        const width = rightValue - leftValue + 1

        // remove all comment id children
        await deleteManyCommentLeftBetweenLeftRightValue(productId, leftValue, rightValue)

        // update value left and right
        await updateManyCommentRightGreaterThanDown(productId, rightValue, width)

        await updateManyCommentLeftGreaterThanDown(productId, leftValue, width)

        return true
    }
}

module.exports = CommentService