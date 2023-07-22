/**
 * The observer for the customer.
 */
class ObserverCustomer {
    constructor(customerName) {
        this.customerName = customerName
    }

    updateStatus(location) {
        this.goToHelp(location)
    }

    goToHelp(location) {
        console.log(`Pick to ${this.customerName} >> PING >> The position ${JSON.stringify(location)}`)
    }
}

/**
 * The subject observer for the customer.
 */
class SubjectCustomer {
    constructor() {
        this.observerCollection = []
    }

    addObserver(observer) {
        this.observerCollection.push(observer)
    }

    notify(location) {
        this.observerCollection.forEach(observer => observer.updateStatus(location))
    }
}

/**
 * Instance the subject observer for the customer.
 */
const subject = new SubjectCustomer()

/**
 * Instance the observer for the customer.
 */
const observer1 = new ObserverCustomer('John')
const observer2 = new ObserverCustomer('Mary')
const observer3 = new ObserverCustomer('Peter')

/**
 * Add the observer to the subject.
 */
subject.addObserver(observer1)
subject.addObserver(observer2)
subject.addObserver(observer3)

/**
 * Notify the subject.
 */
subject.notify({long: 123434, lat: 34256, office: 'Ward 123 - District 1'})

/**
 * If we don't know the customer quantity to serve, It will waste resources, money.
 * So that we need release event to object need serve to they will observer and subscribe to the observer subject (EX: SubjectCustomer).
 * When we need serve the observer objects, we will serve to the observer object through the observer subject.
 */