'use strict'

/**
 * Observable
 */
class ConsumerObservable {
    constructor(consumer) {
        this.consumer = consumer
    }

    sendNewsFeed = (news) => {
        if (!this.consumer.logged()) return
        console.log(`Consumer ${this.consumer.name} ::: received news feed ::: ${news}`)
    }
}

/**
 * Subscriber Observable
 */
class SystemNewsFeedObservable {
    constructor() {
        this.consumers = []
    }

    subscribeNewsFeed = (consumerObservable) => {
        this.consumers.push(consumerObservable)
    }

    newsFeedPublisher = (news) => {
        this.consumers.forEach(consumerObservable => consumerObservable.sendNewsFeed(news))
    }
}

/**
 * Consumer
 */
class ConsumerNewsFeed {
    constructor() {
        this.name = ''
    }

    login = (name) => {
        this.name = name
        console.log(`Login successfully::${name}`)
        return this
    }

    logged = () => {
        return (this.name.length > 0)
    }

    logout = () => {
        console.log(`Logout successfully::${this.name}`)
        this.name = ''
    }

    requestSubscribe = (systemObservable) => {
        if (!this.logged()) throw new Error('Consumer please login account!')

        const consumerObservable = new ConsumerObservable(this)
        systemObservable.subscribeNewsFeed(consumerObservable)
    }
}

/**
 * Listen subscriber
 */
const systemObservable = new SystemNewsFeedObservable()

/**
 * Request subscriber received news feed
 */
const consumer1 = new ConsumerNewsFeed()
consumer1.login('Phi')
consumer1.requestSubscribe(systemObservable)

const consumer2 = new ConsumerNewsFeed()
consumer2.login('Giang').requestSubscribe(systemObservable)
consumer2.logout()

const consumer3 = (new ConsumerNewsFeed()).login('Son')
consumer3.requestSubscribe(systemObservable)

/**
 * Notify news
 */
systemObservable.newsFeedPublisher('Hot trend')