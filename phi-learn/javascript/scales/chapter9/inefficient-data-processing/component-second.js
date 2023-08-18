'use strict';

import Model from 'model.js';

export default class ComponentFirst {

	constructor() {
		this.promise = null;
		this.model = new Model();
	}

	fetch() {
		if (this.promise) {
			return this.promise;
		}

		this.promise = this.model.fetch();

		this.promise.then(() => {
			this.promise = null;
		});

		return this.promise;
	}

};
