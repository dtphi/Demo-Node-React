const Rx = require('rx')
const Redis = require('ioredis')
const redisEvent = require('../constants/redis.event')
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

const consumer = new Redis(redisConnect)
const publisher = new Redis(redisConnect)

const TOPIC = redisEvent.channel.web_chat
consumer.subscribe(TOPIC)

/**
 * Messages observable.
 */
const messagesObservable = Rx.Observable.fromEvent(
    consumer,
    redisEvent.event.message,
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
        console.log(`Server get return consumer channel::`, TOPIC)
        return messagesObservable
    }
}