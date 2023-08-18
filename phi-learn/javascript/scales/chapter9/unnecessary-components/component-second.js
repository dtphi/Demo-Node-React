'use strict';

import events from 'events.js';
import View from 'view.js';

export default class ComponentSecond {

	constructor(router) {
		router.add('second', 'second');
		events.listen('route:second', () => {
			new View(document.getElementById('content'), 'Second');
		});
	}

};
