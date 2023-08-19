const Rx = require('rx')
const dataSource = require('./data.source')
const services = require('./services')(dataSource)

const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)


http.listen(3000, () => console.log('Server listening on port 3000'));
app.use(express.static('static'));

Rx.Observable.fromEvent(io, 'connection')
    .subscribe(function (client) {
        let observable = null;
        Rx.Observable.fromEvent(client, 'request')
            .map((payload) => JSON.parse(payload))
            .flatMapLatest((payload) => {
                let serviceObservable = services[payload.service](payload, observable);
                if (serviceObservable) {
                    observable = serviceObservable;
                }
                return observable;
            })
            .takeUntil(Rx.Observable.fromEvent(client, 'disconnect'))
            .subscribe(data => client.emit('message', data));
    });
