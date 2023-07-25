/**
 * Es13 do not need the constructor() function.
 * Syntax new : #variable_name ( private variable)
 * hasOwnProperty() will override return value of the object.
 */

class Service {
    constructor(name, key) {
        this.name = name
        this.key = key
    }
}

const service1 = new Service('service1', '123456789')
console.log(`Sv name: ${service1.name} key: ${service1.key}`)

class ServiceEs13 {
    // ES13
    name = 'service es13'
    key = '123456789'
    // private variables. need to write the get function to get value.
    #client = 'client'
    get client() {
        return this.#client
    }

    /**
     * Override return false for all properties.
     * @returns 
     */
    /*hasOwnProperty() {
        return false
    }*/

    hasClient() {
        return #client in this
    }
}
const service2 = new ServiceEs13()
//service2.name = 'change name'
console.log(`Sv name: ${service2.name} key: ${service2.key} client: ${service2.client}`)
console.log(service2.hasClient(), service2.hasOwnProperty('client'), service2.hasOwnProperty('name'))

const obj = Object.create(null)
obj.name = 'Object name'
//console.log(obj.hasOwnProperty('name'))
console.log(Object.hasOwn(obj, 'name'))