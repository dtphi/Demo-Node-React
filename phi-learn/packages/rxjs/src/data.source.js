const Rx = require('rx')
const Redis = require('ioredis')
const redisConnect = {
    host: 'redis-16791.c1.ap-southeast-1-1.ec2.cloud.redislabs.com',
    port: 16791,
    username: 'default',
    password: '',
    database: 'shop-dev'
}

const subscriber = new Redis(redisConnect)
const publisher = new Redis(redisConnect)

const TOPIC = 'web_chat'

subscriber.subscribe(TOPIC)
const messagesObservable = Rx.Observable.fromEvent(subscriber, 'message', (channel, message) => JSON.parse(message))

module.exports = {
    push(data) {
        publisher.publish(TOPIC, JSON.stringify(data))
    },
    get() {
        return messagesObservable
    }
}