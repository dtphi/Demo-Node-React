'use strict'

const {
    connectToRabbitMQForTest
} = require('../dbs/init.rabbit')

describe('RabbitMQ Connection', () => {
    it('connectToRabbitMQForTest', async () => {
        const result = await connectToRabbitMQForTest()
        expect(result).toBeUndefined()
    })
})