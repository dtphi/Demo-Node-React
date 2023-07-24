class Car {
    constructor({name = 'Ford Car', doors = 4, price = '10 VND', customerInfo = {}}) {
        this.name = name
        this.doors = doors
        this.price = price
        this.customerInfo = customerInfo
    }
}

class LogisticService {
    transportClass = Car
    getTransport(customerInfo) {
        return new this.transportClass(customerInfo)
    }
}

const carService = new LogisticService()
console.log('Car service', carService.getTransport({customerInfo: {
    name: 'Phi',
    phone: '0987654321'
} }))

class Bus {
    constructor({name = 'Bus Car', doors = 6, price = '4 VND', customerInfo = {}}) {
        this.name = name
        this.doors = doors
        this.price = price
        this.customerInfo = customerInfo
    }
}
class BusService extends LogisticService {
    transportClass = Bus
}

const busService = new BusService()
console.log('Car service', busService.getTransport({customerInfo: {
    name: 'Phi',
    phone: '0987654321'
} }))