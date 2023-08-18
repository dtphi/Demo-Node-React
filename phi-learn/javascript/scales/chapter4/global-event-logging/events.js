export default class Events {

	constructor(log) {
		this.log = log;
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
			var log = this.log;
			return this.listeners[name].map(function(callback) {
				log && console.log('BEFORE', name);

				var result = callback(Object.assign({
					name: name
				}, data));

				log && console.log('AFTER', name);

				return result;
			});
		}
	}

}
