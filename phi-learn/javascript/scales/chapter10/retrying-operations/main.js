'use strict';

import Model from 'model.js';

var model = new Model();

model.fetch()
	.then(() => {
		console.log('succeeded');
	})
	.catch((e) => {
		console.error(e);
	});
