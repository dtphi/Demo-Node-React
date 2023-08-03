const { inventory } = require('../inventory.model')
const { Types } = require('mongoose')
const { convert2ObjectId } = require('../../utils')

/**
 * 
 * @param {*} param0 
 * @returns 
 */
const insertInventory = async ({
    productId, shopId, stock, location = 'unKnow'
}) => {
    return await inventory.create({
        inventory_productId: new Types.ObjectId(productId),
        inventory_location: location,
        inventory_shopId: new Types.ObjectId(shopId),
        inventory_stock: stock,
    })
}

/**
 * 
 * @param {*} param0 
 * @returns 
 */
const reservationInventory = async ({ productId, quantity, cartId }) => {
    const query = {
        inven_productId: convert2ObjectId(productId),
        inven_stock: { $gte: quantity }
    }, updateSet = {
        $inc: {
            inven_stock: -quantity
        },
        $push: {
            inven_reservations: {
                quantity,
                cartId,
                createOn: new Date()
            }
        }
    }, options = { upsert: true, new: true }

    return await inventory.updateOne(query, updateSet)
}

module.exports = {
    insertInventory,
    reservationInventory
}