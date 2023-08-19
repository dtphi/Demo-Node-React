const Rx = require('rx')
const Redis = require('ioredis')
/**
 * The information to connect to the redis server.
 */
const redisConnect = {
    host: 'redis-16791.c1.ap-southeast-1-1.ec2.cloud.redislabs.com',
    port: 16791,
    username: 'default',
    password: '5QEJOtpOq1rSRfIVzjbnD1OQLylvVV3n',
    database: 'shop-dev'
}

const subscriber = new Redis(redisConnect)
const publisher = new Redis(redisConnect)

const TOPIC = 'web_chat'
subscriber.subscribe(TOPIC)

/**
 * Messages observable.
 */
const messagesObservable = Rx.Observable.fromEvent(
    subscriber,
    'message',
    (channel, message) => {
        console.log(`Server message observable::`, channel, message)
        return JSON.parse(message)
    })

module.exports = {
    push(data) {
        console.log(`Server push data::`, data)
        publisher.publish(TOPIC, JSON.stringify(data))
    },
    get() {
        console.log(`Server get return subscriber channel::`, TOPIC)
        return messagesObservable
    }
}