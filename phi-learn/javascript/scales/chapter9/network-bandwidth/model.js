'use strict';

export default class Model {

	fetch() {
		var promise = new Promise((resolve, reject) => {
			setTimeout(() => resolve(), 1000);
		});

		return promise;
	}

};
