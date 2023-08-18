'use strict';

export default class Model {

	fetch() {
		return new Promise((resolve) => {
			setTimeout(() => {
				console.log('processing model');

				this.first = 'First';
				this.last = 'Last';

				resolve(this);
			}, 1000);
		});
	}

};
