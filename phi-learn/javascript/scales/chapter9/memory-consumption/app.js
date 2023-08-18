'use strict';

export default class App {

	constructor() {
		this.listening = [];
	}

	listen(object) {
		this.listening.push(object);
	}

};
