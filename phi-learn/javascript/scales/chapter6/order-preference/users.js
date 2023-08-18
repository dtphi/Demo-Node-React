export default class Users {

	constructor(collection, order) {
		this.collection = collection;
		this.order = order;
		this[Symbol.iterator] = function*() {
			for (let user of this.collection) {
				yield user;
			}
		};
	}

	set order(order) {
		var order = order.split(' '),
			key = order[0],
			dir;

		if (order.length === 2) {
			dir = order[1];
		}

		this.collection.sort((a, b) => {
			var aValue = typeof a[key].toLowerCase === 'function' ?
				a[key].toLowerCase() : a[key];

			var	bValue = typeof b[key].toLowerCase === 'function' ?
				b[key].toLowerCase() : b[key];

			if (aValue < bValue) {
				return -1;
			} else if (aValue > bValue) {
				return 1;
			} else {
				return 0;
			}
		});

		if (dir === 'desc') {
			this.collection.reverse();
		}
	}

};
