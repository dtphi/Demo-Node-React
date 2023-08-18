'use strict';

class Events {

	constructor() {
		this.listeners = {};
	}

	listen(name, callback) {
		if (name in this.listeners) {
			this.listeners[name].push(callback);
		} else {
			this.listeners[name] = [ callback ];
		}
	}

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

	trigger(name, data) {
		if (name in this.listeners) {
			var previous = null;
			return this.listeners[name].map(function(callback) {
				var result;
				try {
					result = previous = callback(Object.assign({
						name: name
					}, data), previous);
				} catch(e) {
					result = previous = e;
				}
				return result;
			});
		}
	}

}

var events = new Events;

export default events;
