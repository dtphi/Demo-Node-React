var Bacon = require("baconjs");

var myCustomEventStream = Bacon.fromBinder(function(push){
    push('some value');
    push('other value');
    push(new Bacon.Error('NOW AN ERROR HAPPENED'));
    push('Now the stream will finish');
    push(new Bacon.End());
}).endOnError();
myCustomEventStream
    .onValue((value)=> console.log(value));