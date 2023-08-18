'use strict';

var counter = 0;

export default class Model {

	constructor() {
		this.data = new Array(++counter).fill(true);
	}

};
