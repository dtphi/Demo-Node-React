'use strict';

import Model from 'model.js';

export default class ComponentFirst {

	constructor() {
		this.model = new Model();
	}

	fetch() {
		return this.model.fetch();
	}

};
