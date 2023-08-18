'use strict';

import events from 'events.js';

function getError(obj) {
	if (obj instanceof Error) {
		return obj.message;
	} else if (obj && obj.hasOwnProperty('error')) {
		return obj.error;
	}
}

events.listen('action', (data, previous) => {
	if (Math.round(Math.random())) {
		throw new Error('First callback failed randomly');
	} else {
		console.log('First callback succeeded');	
	}
});

events.listen('action', (data, previous) => {
	var error = getError(previous);
	if (error) {
		console.error(`Second callback failed: ${error}`);
		return previous;
	} else if (Math.round(Math.random())) {
		throw new Error('Second callback failed randomly');
	} else {
		console.log('Second callback succeeded');
	}
});

events.listen('action', (data, previous) => {
	var error = getError(previous);
	if (error) {
		console.error(`Third callback failed: ${error}`);
		return previous;
	} else {
		console.log('Third callback succeeded');
	}
});

events.trigger('action');
