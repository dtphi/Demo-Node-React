export default class Events {

	constructor() {
		this.last = null;
		this.threshold = 100;
		this.size = 0;
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
		var now = +new Date();

		if (this.last === null || now - this.last > this.threshold) {
			this._trigger(name, data);
			this.last = now;
		} else {
			this.size ++;
			setTimeout(() => {
				this._trigger(name, data);
				this.size --;
			}, this.threshold * this.size || 1);
		}
	}

	_trigger(name, data) {
		if (name in this.listeners) {
			return this.listeners[name].map(function(callback) {
				return callback(Object.assign({
					name: name
				}, data));
				return result;
			});
		}
	}

}
