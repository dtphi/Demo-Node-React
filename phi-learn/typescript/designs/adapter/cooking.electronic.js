/**
 * Target
 */
class NoiComDienTarget {
    constructor() {
        this.plugged = '2slot'
    }

    cook = () => {
        console.log(`Plugged 2 slot to cooking`)
    }
}

/**
 * Adaptee
 */
class NoiComDienAdaptee {
    constructor() {
        this.plugged = '3slot'
    }

    cook3Slot = () => {
        console.log(`Plugged 3 slot cooking`)
    }
}

/**
 * Cooking Adapter for Adaptee
 */
class NoiComDienAdapter extends NoiComDienTarget {
    constructor(adaptee) {
        super()
        this._adaptee = adaptee
    }

    cook = () => {
        this._adaptee.cook3Slot()
        console.log(`Plugged 2 slot to cooking`)
    }
}

/**
 * Client cooking.
 */
clientCookAdapter = (target) => {
    try {
        if (!(target.plugged === '2slot')) {
            throw new Error('Plugged slot invalid!')
        }
        target.cook()
    } catch (error) {
        console.log(error)
    }
}

// Cooking
clientCookAdapter(new NoiComDienTarget())

// Cooking
// clientCookAdapter(new NoiComDienAdaptee())
clientCookAdapter(new NoiComDienAdapter(new NoiComDienAdaptee()))