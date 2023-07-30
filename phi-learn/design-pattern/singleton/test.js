const RoundRobin = require('./round.robin');

const loadBalancer = new RoundRobin()
const loadBalancer1 = new RoundRobin()
const loadBalancer2 = new RoundRobin()
const loadBalancer3 = new RoundRobin()

console.log('Start RoundRobin Singleton Compare....', loadBalancer === loadBalancer1, loadBalancer1 === loadBalancer2, loadBalancer2 === loadBalancer3)

loadBalancer.addServer('server1')
loadBalancer.addServer('server2')
loadBalancer.addServer('server3')
loadBalancer.addServer('server4')

console.log(loadBalancer.getNextServer())
console.log(loadBalancer.getNextServer())
console.log(loadBalancer.getNextServer())
console.log(loadBalancer.getNextServer())
console.log(loadBalancer.getNextServer())
console.log(loadBalancer.getNextServer())
console.log(loadBalancer.getNextServer())
console.log(loadBalancer.getNextServer())

//////////////////////////////////////////////////////////////////////////////////////////////
// Test count singleton 
const singletonCounter = require('./count')

// newObject = new singletonCounter() => TypeError: singletonCounter is not a constructor
console.log('Start count Singleton test:::', singletonCounter.getCount())

singletonCounter.increment()
singletonCounter.increment()

console.log('End count:::', singletonCounter.getCount())


////////////////////////////////////////////////////////////////////////////////////////////////