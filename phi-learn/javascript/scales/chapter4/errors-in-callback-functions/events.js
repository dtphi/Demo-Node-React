export default class Events {

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
		if (!(name in this.listeners)) {
			return;
		}

		var error = false,
			mapped;


		mapped = this.listeners[name].map((callback) => {
			if (error) {
				return;
			}

			var result;

			try {
				result = callback(Object.assign({
					name: name,
					broker: this
				}, data));
			} catch (err) {
				result = { error: true };
			}

			if (result && result.error) {
				error = true;
			}
				
			return result;
		});

		if (error) {
			this.trigger(`${name}:error`);
		}
	}

}
