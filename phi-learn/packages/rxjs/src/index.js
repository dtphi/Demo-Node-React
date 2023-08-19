const Rx = require('rx')
const dataSource = require('./data.source')
const services = require('./services')(dataSource)

const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)


http.listen(3000, () => console.log('Server listening on port 3000'))
app.use(express.static('static'))

/**
 * Listening event 'connect' from socket.io-client at client.
 */
Rx.Observable.fromEvent(io, 'connection')
    .subscribe(function (client) {
        console.log(`Server io connection::`, client.handshake.url)
        let observable = null;
        Rx.Observable.fromEvent(client, 'request')
            .map((payload) => {
                console.log(`Server map request:::`, payload)
                return JSON.parse(payload)
            })
            .flatMapLatest((payload) => {
                console.log(`Server flatMapLatest request:::`, payload)
                let serviceObservable = services[payload.service](payload, observable)
                if (serviceObservable) {
                    observable = serviceObservable;
                }
                console.log(`Server flatMapLatest observable return:::`, observable)
                return observable;
            })
            .takeUntil(Rx.Observable.fromEvent(client, 'disconnect'))
            .subscribe(data => {
                console.log(`Server subscribe emit message client::`, data)
                client.emit('message', data)
            });
    });
