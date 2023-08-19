var Rx = require('rx');

/**
 * Observable event click from button send message.
 */
var sendPressedObservable = Rx.Observable
    .fromEvent(document.getElementById('send_message'), 'click');

/**
 * Observable event enter from input message and
 * filter event key code == 13.
 */
var enterPressedObservable = Rx.Observable
    .fromEvent(document.getElementById('message_input'), 'keypress')
    .filter(function (event) {
        var ENTER_KEY_CODE = 13;
        return event.keyCode === ENTER_KEY_CODE || event.which === ENTER_KEY_CODE;
    });

/**
 * Rx merge events [sendPressedObservable| enterPressedObservable]
 * return TapObservable
 */
var messageSubmitObservable = sendPressedObservable
    .merge(enterPressedObservable)
    .map(function () {
        console.log(`Click sendMessage Map::`, document.getElementById('message_input').value)
        return document.getElementById('message_input').value;
    }).filter(function (message) {
        return message != "";
    }).do(function () {
        document.getElementById('message_input').value = '';
    });

module.exports = messageSubmitObservable;

Rx.Observable
    .fromEvent(document.getElementById('message_input'), 'click')
    .bufferWithTimeOrCount(800, 3)
    .filter(function (events) {
        return events.length === 3;
    }).subscribe(function () {
        document.getElementById('message_input').value = '/roll_a_dice';
    });
