import Events from 'events.js';

function callbackFirst(data) {
	console.log('CALLBACK', data.name);
}

function callbackLast(data) {
	setTimeout(function() {
		console.log('CALLBACK', data.name);
	}, 500);
}

var broker = new Events(true);

broker.listen('first', callbackFirst);
broker.listen('last', callbackLast);

broker.trigger('first');
broker.trigger('last');

// →
// BEFORE first
// CALLBACK first
// AFTER first
// BEFORE last
// AFTER last
// CALLBACK last
