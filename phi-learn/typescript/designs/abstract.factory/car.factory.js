/**
 * Define the products need factory.
 */
class Car {
    constructor() {
    }

    price = (price) => {
        this.price = price
    }

    name = (name) => {
        this.name = name
    }

    factoryDate = (factoryDate) => {
        this.factoryDate = factoryDate
    }

    tax = (percent) => { }

    useCar = () => {
        console.log(`Result factory ${this.name}`)
    }
}

class BicycleCar extends Car {
    constructor() {
        super()
    }

    tax = (percent) => {
        this.tax = this.price * percent * 100
    }
}

class MotobikeCar extends Car {
    constructor() {
        super()
    }

    tax = (percent) => {
        this.tax = this.price * percent * 1000
    }
}

/**
 * Concrete Factory.
 */
class FactoryVinFast {
    constructor() {
    }

    createCar1 = () => {
        const bicycle = new BicycleCar()
        bicycle.name('Bicycle_01')
        bicycle.price('200')
        bicycle.factoryDate('2023-09-01')
        bicycle.tax(10)

        return bicycle
    }

    createCar2 = () => {
        const bicycle = new BicycleCar()
        bicycle.name('Bicycle_02')
        bicycle.price('200')
        bicycle.factoryDate('2023-09-01')
        bicycle.tax(10)

        return bicycle
    }
}

class FactoryHonda {
    constructor() {
    }

    createCar1 = () => {
        const moto = new MotobikeCar()
        moto.name('MotobikeCar_01')
        moto.price('500')
        moto.factoryDate('2023-09-01')
        moto.tax(10)

        return moto
    }

    createCar2 = () => {
        const moto = new MotobikeCar()
        moto.name('MotobikeCar_02')
        moto.price('500')
        moto.factoryDate('2023-09-01')
        moto.tax(10)

        return moto
    }
}

/**
 * Client work
 */
const clientAbstractFactory = (factory) => {
    const product1 = factory.createCar1()
    const product2 = factory.createCar2()

    product1.useCar()
    product2.useCar()
}

/**
 * The client code can work with any concrete factory class.
 */
clientAbstractFactory(new FactoryHonda())
clientAbstractFactory(new FactoryVinFast())