import Events from 'events.js';

function callbackError(data) {
	console.log('starting:', 'going to return an error');
	return { error: true };
}

function callbackException(data) {
	console.log('stopping:', 'going to raise an exception');
	throw Error;
}

var broker = new Events();

broker.listen('start', callbackError);
broker.listen('start:error', () => {
	console.error('failed to start, restoring state');
});

broker.listen('stop', callbackException);
broker.listen('stop:error', () => {
	console.error('failed to stop, restoring state');
});

broker.trigger('start');
broker.trigger('stop');
// →
// starting: going to return an error
// failed to start, restoring state
// stopping: going to raise an exception
// failed to stop, restoring state
