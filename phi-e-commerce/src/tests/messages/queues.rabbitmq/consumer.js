const amqp = require('amqplib')

const runConsumer = async () => {
    try {
        const connection = await amqp.connect('amqp://guest:123456@localhost')
        const channel = connection.createChannel()

        const queueName = 'test-topic'

        await channel.assertQueue(queueName, {
            durable: true
        })

        // using Buffer to send message faster.
        await channel.consume(queueName, (message) => {
            console.log(`Received ${message.content.toString()}`)
        }, {
            noAck: true // message will be sent not repeat again
        })
        console.log(`message send to consumer channel ::`, message)
    } catch (error) {
        console.error(error)
    }
}

await runConsumer().catch(console.error)
