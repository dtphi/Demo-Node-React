var Rx = require('rx');
var io = require('socket.io-client');
var socket = io('http://localhost:3000');
const socketEvent = require('../constants/socket.event')

var connectionObservable = Rx.Observable.fromEvent(socket, socketEvent.clEvent.connect);
var disconnectObservable = Rx.Observable.fromEvent(socket, socketEvent.clEvent.disconnect);

module.exports = {
    addSender: function (observable) {
        connectionObservable
            .flatMap(observable)
            .takeUntil(disconnectObservable)
            .map(function (data) {
                console.log(`addSender Map::`, JSON.stringify(data))
                return JSON.stringify(data);
            })
            .subscribe(function (data) {
                console.log(`addSender Subscribe::`, data)
                /**
                 * Socket emit request to the server.
                 * request | data: {"service":"listenToMessages","me":"Phi"}
                 */
                socket.emit(socketEvent.clEmit.request, data);
            });
    },
    listen: function (event) {
        var eventObservable = Rx.Observable.fromEvent(socket, event);
        return connectionObservable
            .flatMap(eventObservable)
            .takeUntil(disconnectObservable);
    }
};
