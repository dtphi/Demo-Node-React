'use strict'

// Not need disConnect() consecutive
const mongoose = require('mongoose')
const os = require('os')
const process = require('process')
const _SECONDS = 5000
// count Connect
const countConnect = () => {
    const numConnection = mongoose.length
    console.log(`Number of connections::${numConnection}`)
}

// check over load
const checkOverload = () => {
    setInterval(() => {
        const numConnections = mongoose.connections.length
        const numCores = os.cpus().length
        const memoryUsage = process.memoryUsage().rss;
        // Example maximum number of connections based on number of cores.
        const maxConnection = numCores * 5

        console.log(`Active connections: ${numConnections}`)
        console.log(`Memory usage: ${memoryUsage / 1024 /1024} MB`)

        if (numConnections > maxConnection) {
            console.log(`Connection overload detected`)
            // notify.send(.....)
        }
    }, _SECONDS) // Monitor every 5 seconds
}

module.exports = {
    countConnect,
    checkOverload
}