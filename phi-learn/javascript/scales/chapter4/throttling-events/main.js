import Events from 'events.js';

function callback(data) {
	console.log('CALLBACK', new Date().getTime());
}

var broker = new Events(true);

broker.listen('throttled', callback);

var counter = 5;

while (counter--) {
	broker.trigger('throttled');
}
// →
// CALLBACK 1427840290681
// CALLBACK 1427840290786
// CALLBACK 1427840290886
// CALLBACK 1427840290987
// CALLBACK 1427840291086
