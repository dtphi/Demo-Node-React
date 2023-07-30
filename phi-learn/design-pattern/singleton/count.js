'use strict'

let counter = 0

class Counter {
    constructor() {
        if (Counter.instance) {
            throw new Error("You can only create one instance!")
        }
        Counter.instance = this
    }

    getInstance() {
        return this
    }

    getCount() {
        return counter
    }

    increment() {
        return ++counter
    }

    decrement() {
        return --counter
    }
}

const singletonCounter = Object.freeze(new Counter())
module.exports = singletonCounter