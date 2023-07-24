const { createReadStream } = require ('fs')
const { createServer } = require('http')

const server = createServer()
server.on('request', (req, res) => {
    const result = createReadStream('./download.txt')

    result.pipe(res)
})
process.title = 'withStreamDownload'
console.log(process.pid)
server.listen(7000)
