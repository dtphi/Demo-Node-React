const cartModel = require('../cart.model')
const { convert2ObjectId } = require("../../utils")

/**
 * 
 * @param {*} cartId 
 * @returns 
 */
const findCartById = async (cartId) => {
    return await cartModel.findOne({
        _id: convert2ObjectId(cartId), cart_state: 'active'
    }).lean()
}

module.exports = {
    findCartById
}
