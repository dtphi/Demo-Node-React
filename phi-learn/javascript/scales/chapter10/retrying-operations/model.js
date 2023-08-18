'use strict';

import fetch from 'api.js';

export default class Model {

	constructor(retries=3) {
		this.attempts = 0;
		this.retries = retries;
	}

	fetch() {
		return new Promise(this.fetchExecutor.bind(this));
	}

	fetchExecutor(resolve, reject) {
		fetch().then(() => {
			this.attempts = 0;
			resolve();
		}).catch(() => {
			if (this.attempts++ < this.retries) {
				console.log('retrying', this.attempts);
				this.fetchExecutor(resolve, reject);
			} else {
				this.attempts = 0;
				reject(`Max fetch attempts ${this.retries} exceeded`);
			}
		});
	}

};
