const amqp = require('amqplib')

const message = 'Hello RabbitMQ producer for Ecommerce'

const runProducer = async () => {
    try {
        const connection = await amqp.connect('amqp://guest:123456@localhost')
        const channel = connection.createChannel()

        const queueName = 'test-topic'

        await channel.assertQueue(queueName, {
            durable: true
        })

        // send message to consumer channel
        // using Buffer to send message faster.
        await channel.sendToQueue(queueName, Buffer.from(message))
        console.log(`message send to consumer channel ::`, message)
    } catch (error) {
        console.error(error)
    }
}

await runProducer().catch(console.error)
