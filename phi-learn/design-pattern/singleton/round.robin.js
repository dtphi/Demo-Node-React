'use strict'
class RoundRobin {
    constructor() {
        if (RoundRobin.instance) {
            return RoundRobin.instance
        }
        RoundRobin.instance = this
            this.servers = []
            this.index = 0
        }
        addServer(server) {
            this.servers.push(server)
        }
        getNextServer() {
            if (!this.servers.length) {
                throw new Error('No servers available')
            }
            const server = this.servers[this.index]
            this.index = (this.index + 1) % this.servers.length

            return server
        }
}

const loadBalancer = new RoundRobin()
const loadBalancer1 = new RoundRobin()
const loadBalancer2 = new RoundRobin()
const loadBalancer3 = new RoundRobin()

console.log('Compare....', loadBalancer === loadBalancer1, loadBalancer1 === loadBalancer2, loadBalancer2 === loadBalancer3)

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
