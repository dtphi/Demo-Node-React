var Rx = require('rx');
//debugger
var connection = require('./connection');
var events = require('./events');

/**
 * Input User login to chat box.
 */
var logged = prompt("Please enter your name", "");

/**
 * Message can be observable to enter or click events from user chat.
 */
var messagesObservable = events.map(function (value) {
    var userName, splittedUserInput, action, content;
    //debugger
    if (value.indexOf('!') === 0) {
        userName = value.substring(1);
        return { service: 'blockUser', blocked: userName, from: logged };
    }
    if (value.indexOf('/') === 0) {
        splittedUserInput = value.split(' ');
        action = splittedUserInput[0].substring(1);
        content = splittedUserInput.slice(1).join(' ');
        return { service: 'command', action: action, content: content, from: logged };
    }
    if (value.indexOf('@') === 0) {
        splittedUserInput = value.split(' ');
        userName = splittedUserInput[0].substring(1);
        content = splittedUserInput.slice(1).join(' ');
        return { service: 'sendMessage', to: userName, content: content, from: logged };
    }
    return { service: 'sendMessage', content: value, from: logged };
}).merge(
    Rx.Observable.of({ service: 'listenToMessages', me: logged })
);

/**
 * Add request to server io when user presses either click or enter key code = 13.
 */
connection.addSender(messagesObservable);

/**
 * Add listen event 'message' client to observer to server.
 */
connection.listen('message')
    .bufferWithTime(20000) // listen for message chanel from server.
    .filter(function (messages) {
        console.log(`Client listen Filter::`, messages)
        /**
         * Check message received from server is either a message or empty string.
         * @return {boolean} true if message not empty string.
         */
        return messages.length > 0;
    })
    .map(function (messages) {
        /**
         * If filter return true , modifier message to #document dom html.
         */
        var li;
        var i = 0;
        var fragment = document.createDocumentFragment();
        for (; i < messages.length; i++) {
            li = document.createElement("li");
            li.innerText = messages[i].from + ' says to ' +
                (messages[i].to || 'everybody') + ' : ' + messages[i].content;
            fragment.appendChild(li);
        }
        console.log(`Client listen Map::`, fragment)
        return fragment;
    })
    .subscribe(function (node) {
        console.log(`Client listen Subscribe::`, node)
        /**
         * if node return from map observable is #document dom html.
         * append child node to document #message dom html.
         */
        document.getElementById("messages").appendChild(node);
    });
