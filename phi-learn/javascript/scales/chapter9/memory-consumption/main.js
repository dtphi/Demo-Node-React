'use strict';

import App from 'app.js';
import Model from 'model.js';

var app = new App();

document.getElementById('create')
	.addEventListener('click', () => {
		var i = 1000;
		while (--i) {
			var model = new Model();
			app.listen(model);
		}
	});
