/**
 * Download the file not using the Stream.
 */
const { readFileSync } = require ('fs')
const { createServer } = require('http')

const server = createServer()
server.on('request', (req, res) => {
    const result = readFileSync('./download.txt')

    res.end(result)
})
console.log(process.pid)
server.listen(6000)
