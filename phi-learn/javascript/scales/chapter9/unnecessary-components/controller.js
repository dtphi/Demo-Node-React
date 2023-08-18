'use strict';

import events from 'events.js';
import View from 'view.js';

export default class Controller {

	constructor(router) {
		router.add('first', 'first');
		events.listen('route:first', () => {
			new View(document.getElementById('content'), 'First');
		});		
	}

};
