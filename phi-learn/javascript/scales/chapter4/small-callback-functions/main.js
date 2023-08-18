import Events from 'events.js';

function callbackFirst(data) {
	data.broker.trigger('logic', {
		value: 'from first callback'
	});
}

function callbackSecond(data) {
	data.broker.trigger('logic', {
		value: 'from second callback'
	});
}

var broker = new Events();

broker.listen('click', callbackFirst);
broker.listen('click', callbackSecond);
broker.listen('logic', (data) => {
	console.log(data.name, data.value);
});

broker.trigger('click');
// →
// logic from first callback
// logic from second callback
