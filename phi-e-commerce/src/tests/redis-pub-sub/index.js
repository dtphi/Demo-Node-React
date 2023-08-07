require('./inventory.test')

const productPurchasePublish = require('./product.test')

const productTest = () => {
    productPurchasePublish.purchaseProduct('product::001', 10)
}

module.exports = {
    productTest
}