'use strict';

export default class Events {

	// The "listeners" object is a mapping
	// between event name and callback function.
	constructor() {
		this.listeners = {};
	}

	// Listen for an event. When the given event name
	// is triggered, the given callback is fired.
	listen(name, callback) {
		if (name in this.listeners) {
			this.listeners[name].push(callback);
		} else {
			this.listeners[name] = [ callback ];
		}
	}

	// Removes the given callback function from the
	// given event name.
	//
	// If the given callback is a
	// function object, we look up the index in the
	// list of event handlers for the event name.
	//
	// If found, we splice it from the array. If the
	// callback argument isn't a function object, we
	// empty all listerners for the event name, we
	// clear all callback functions.
	unlisten(name, callback) {
		if (name in this.listeners) {
			if (typeof(callback) === 'function') {
				let index = this.listeners[name].indexOf(callback);
				if (index > -1) {
					this.listeners[name].splice(index, 1);
				}
			} else {
				this.listeners[name] = [];
			}
		}
	}

	// Triggers the given event name. The data argument
	// is arbitrary data supplied by the caller and is optional.
	//
	// If the event name exists as a key in the listeners object,
	// we map the results of calling each callback function with
	// the supplied data, and return it.
	//
	// The caller then has access to any given callback result.
	trigger(name, data) {
		if (name in this.listeners) {
			return this.listeners[name].map(function(callback) {
				return callback(data);
			});
		}
	}

}
