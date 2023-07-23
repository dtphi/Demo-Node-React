const http = require('http')
/**
 * Run loop compute will over stack memory.
 */
const compute = () => {
    console.log('Performing CPU-intensive....')
    compute()
}
const server = http.createServer((req, res) => {
    res.end('Hello without process nextTick')
})

server.listen(6000, () => {
    console.log('Server running on port 6000')
})

// RangeError: Maximum call stack size exceeded
compute()