class Leader {
    receiveRequest(offer) {
        console.log(`Received request ${offer}: OK`)
    }
}

/**
 * Proxy between the Leader and Developer.
 */
class Secretary {
    constructor() {
        this.leader = new Leader()
    }
    receiveRequest(offer) {
        this.leader.receiveRequest(offer)
        this.sendRequest(offer)
    }
    sendRequest(offer) {
        console.log(`Sending request ${offer}: OK`)
    }
}

class Developer {
    constructor(offer) {
        this.offer = offer
    }
    applyFor(targets) {
        const proxy = new targets()
        proxy.receiveRequest(this.offer)
    }
}   

const dev = new Developer('Offer for 2k USD')
dev.applyFor(Secretary)
