'use strict';

export default class Component {

	constructor(collection) {
		collection.reduce((x, y) => x + y, 0);
	}

};
