const { Kafka, logLevel } = require('kafkajs')

const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['localhost:9092'],
    //logLevel: NOTHING
})

const consumer = kafka.consumer({ groupId: 'test-group' })

const runConsumer = async () => {
    await consumer.connect()
    await consumer.subscribe({ topic: 'test-topic', fromBeginning: true })

    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            console.log({
                value: message.value.toString(),
            })
        },
    })
}

await runConsumer().catch(console.error)