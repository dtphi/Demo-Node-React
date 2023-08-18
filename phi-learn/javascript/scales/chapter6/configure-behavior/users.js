export default class Users {

	constructor(collection, order) {
		this.collection = collection;
		this.order = order;
		this.ordered = !!order;
	}

	set order(key) {
		this.collection.sort((a, b) => {
			if (a[key] < b[key]) {
				return -1;
			} else if (a[key] > b[key]) {
				return 1;
			} else {
				return 0;
			}
		});
	}

	min(key) {
		if (this.ordered) {
			return this.collection[0];
		} else {
			var result = {};
			result[key] = Number.POSITIVE_INFINITY;

			for (let item of this.collection) {
				if (item[key] < result[key]) {
					result = item;
				}
			}

			return result
		}
	}

	max(key) {
		if (this.ordered) {
			return this.collection[this.collection.length - 1];
		} else {
			var result = {};
			result[key] = Number.NEGATIVE_INFINITY;

			for (let item of this.collection) {
				if (item[key] > result[key]) {
					result = item;
				}
			}

			return result
		}
	}

};
