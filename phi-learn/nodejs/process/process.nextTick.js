const http = require('http')
/**
 * Run loop compute with process nextTick.
 */
const compute = () => {
    console.log('Performing CPU-intensive.......process nextTick')
    process.nextTick(compute)
}
const server = http.createServer((req, res) => {
    res.end('Hello process nextTick')
})

server.listen(6000, () => {
    console.log('Server running on port 6000')
})

// Stack process OK.
compute()