'use_strict'

const amqp = require('amqplib')

const connectToRabbitMQ = async () => {
    try {
        const connection = await amqp.connect('amqp://guest:12345@localhost')

        if (!connection) throw new Error('Not connect established')

        const chanel = await connection.createChannel()

        return { chanel, connection }
    } catch (error) {
        console.error('Error while connecting to RabbitMQ::', error)
    }
}

const connectToRabbitMQForTest = async () => {
    try {
        const connection = await connectToRabbitMQ()

        // Publish message for queue
        const queue = 'test-queue'
        const message = 'Hello ecommerce for phi'

        await chanel.assertQueue(queue)
        await chanel.sendToQueue(queue, Buffer.from(message))

        // Close connection
        await connection.close()
    } catch (error) {
        console.error('Error while connecting to RabbitMQ::', error)
    }
}

module.exports = {
    connectToRabbitMQ,
    connectToRabbitMQForTest
}