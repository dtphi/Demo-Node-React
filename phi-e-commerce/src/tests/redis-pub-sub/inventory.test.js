const redisPubSubService = require('../../services/redisPubsub.service')

class InventoryServiceTest {

    constructor() {
        redisPubSubService.subscribe('purchase_events', (channel, message) => {
            console.log(`Received message: ${message}`)
            InventoryServiceTest.updateInventory(JSON.parse(message))
        })
    }

    static updateInventory({ productId, quantity }) {
        // Update inventory logic ...
        console.log(`[0001]: Update inventory for product ID: ${productId} quantity: ${quantity}`)
    }
}

module.exports = new InventoryServiceTest()