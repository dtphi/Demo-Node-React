'use strict'

const comment = require('../../models/comment.model')
const { convert2ObjectId } = require("../../utils")

/**
 * 
 * @param {*} id 
 * @returns 
 */
const findById = async (id) => {
    return comment.findById(id)
}

/**
 * 
 * @param {*} parentId 
 * @returns 
 */
const findParentById = async (parentId) => {
    return findById(parentId)
}

/**
 * 
 * @param {*} productId 
 * @param {*} parent 
 * @param {*} limit 
 * @param {*} offset 
 * @returns 
 */
const findListByParentLeftRight = async (productId, parent, limit, offset) => {

    return comment.find({
        comment_product_id: convert2ObjectId(productId),
        comment_left: { $gt: parent.comment_left },
        comment_right: { $lte: parent.comment_right }
    }).select({
        comment_left: 1,
        comment_right: 1,
        comment_content: 1,
        comment_parent_id: 1
    }).sort({
        comment_left: 1
    })
}

/**
 * 
 * @param {*} productId 
 * @param {*} parentId 
 * @returns 
 */
const findListByParentId = async (productId, parentId, limit, offset) => {

    return comment.find({
        comment_product_id: convert2ObjectId(productId),
        comment_parent_id: parentId
    }).select({
        comment_left: 1,
        comment_right: 1,
        comment_content: 1,
        comment_parent_id: 1
    }).sort({
        comment_left: 1
    })
}

/**
 * 
 * @param {*} productId 
 * @param {*} rightValue 
 * @param {*} commentRightWidth 
 */
const updateManyCommentRightGreaterThanOrEqualCommentRight = async (productId, rightValue, commentRightWidth = 2) => {
    comment.updateMany({
        comment_product_id: convert2ObjectId(productId),// filter all documents where comment_product_id = productId.
        comment_right: { $gte: rightValue } // Select all documents in the comment collection where comment_right is greater than or equal to rightValue.
    }, {
        $inc: { comment_right: commentRightWidth } // increment 2 all documents in the comment collection.
    })
}

/**
 * 
 * @param {*} productId 
 * @param {*} rightValue 
 * @param {*} commentLeftWidth 
 */
const updateManyCommentLeftGreaterThanCommentRight = async (productId, rightValue, commentLeftWidth = 2) => {
    comment.updateMany({
        comment_product_id: convert2ObjectId(productId),
        comment_left: { $gt: rightValue } // Select all documents in the comment collection where comment_left is greater than rightValue.
    }, {
        $inc: { comment_left: commentLeftWidth } // increment 2
    })
}

/**
 * 
 * @param {*} productId 
 * @param {*} greaterThanValue 
 * @param {*} commentLeftWidth 
 */
const updateManyCommentLeftGreaterThanDown = async (productId, greaterThanValue, commentLeftWidth) => {
    comment.updateMany({
        comment_product_id: convert2ObjectId(productId),
        comment_left: { $gt: greaterThanValue } // Select all documents in the comment collection where comment_left is greater than rightValue.
    }, {
        $inc: { comment_left: -commentLeftWidth }
    })
}

/**
 * 
 * @param {*} productId 
 * @param {*} greaterThanValue 
 * @param {*} commentRightWidth 
 */
const updateManyCommentRightGreaterThanDown = async (productId, greaterThanValue, commentRightWidth) => {
    comment.updateMany({
        comment_product_id: convert2ObjectId(productId),
        comment_right: { $gt: greaterThanValue } // Select all documents in the comment collection where comment_right is greater than rightValue.
    }, {
        $inc: { comment_right: -commentRightWidth }
    })
}

/**
 * 
 * @param {*} productId 
 * @param {*} leftValue 
 * @param {*} rightValue 
 * @returns 
 */
const deleteManyCommentLeftBetweenLeftRightValue = async (productId, leftValue, rightValue) => {
    return comment.deleteMany({
        comment_product_id: convert2ObjectId(productId),
        // remove all comment where comment_left  is greater than or equal leftValue and 
        // where comment_left is less than or equal rightValue
        comment_left: { $gte: leftValue, $lte: rightValue }
    })
}

/**
 * 
 * @param {*} productId 
 * @param {*} userId 
 * @param {*} content 
 * @param {*} parentCommentId 
 * @param {*} commentLeft 
 * @param {*} commentRight 
 * @returns 
 */
const saveInstance = async (productId, userId, content, parentCommentId, commentLeft, commentRight) => {
    const commentModel = new comment({
        comment_product_id: productId,
        comment_user_id: userId,
        comment_content: content,
        comment_parent_id: parentCommentId,
        comment_left: commentLeft,
        comment_right: commentRight
    })

    return commentModel.save()
}

/**
 * 
 * @param {*} productId 
 * @returns 
 */
const findOneCommentRight = async (productId) => {
    return comment.findOne({
        comment_product_id: convert2ObjectId(productId)
    }, 'comment_right', { sort: { comment_right: -1 } })
}

module.exports = {
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
}