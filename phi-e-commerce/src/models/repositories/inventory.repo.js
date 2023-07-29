const { inventory } = require('../inventory.model')
const {Types} = require('mongoose')

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

module.exports = {
    insertInventory
}