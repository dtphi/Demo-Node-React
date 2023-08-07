const Redis = require('redis')

class RedisPubSubService {

    constructor() {
        try {
            this.subscriber = Redis.createClient({
                url: 'redis://redis-16791.c1.ap-southeast-1-1.ec2.cloud.redislabs.com:16791',
                username: 'default',
                password: '5QEJOtpOq1rSRfIVzjbnD1OQLylvVV3n',
                database: 'shop-dev'
            })

            this.publisher = Redis.createClient({
                url: 'redis://redis-16791.c1.ap-southeast-1-1.ec2.cloud.redislabs.com:16791',
                username: 'default',
                password: '5QEJOtpOq1rSRfIVzjbnD1OQLylvVV3n',
                database: 'shop-dev'
            })

            //this.subscriber.connect()
            //this.publisher.connect()
        } catch (err) {
            console.log(err)
        }
    }

    publish(channel, message) {
        try {
            const plish = new Promise((resolve, reject) => {
                this.publisher.publish(channel, message, (err, reply) => {
                    if (err) {
                        console.log('error', err.stack)
                        reject(err)
                    }
                    else {
                        resolve(reply)
                    }
                    console.log('error', err.stack)
                })
            })

            return plish
        } catch (err) {
            console.log(err.stack)
        }

    }

    subscribe(channel, callback) {
        try {
            this.subscriber.subscribe(channel)
            this.subscriber.on('message', (subscriberChannel, message) => {
                if (channel === subscriberChannel) {
                    callback(channel, message)
                }
            })
        } catch (err) {
            console.log(err.stack)
        }

    }
}

module.exports = new RedisPubSubService()