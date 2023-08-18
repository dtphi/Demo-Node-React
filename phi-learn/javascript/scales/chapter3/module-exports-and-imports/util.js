// util.js
// Exports a basic console.log() wrapper function.

'use strict';

export default function log(message) {
	if (console) {
		console.log(message);
	}
}
