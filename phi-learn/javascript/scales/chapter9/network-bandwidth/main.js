'use strict';

import Model from 'model.js';

function onRequestsInput(e) {
	var size = +e.target.value,
		cnt = 0,
		models = [];

	while (cnt++ < size) {
		models.push(new Model());
	}

	console.clear();
	console.time(`fetched ${models.length} models`);

	Promise.all(models.map(item => item.fetch())).then(() => {
		console.timeEnd(`fetched ${models.length} models`);
	});
}

var requests = document.getElementById('requests');

requests.addEventListener('input', onRequestsInput);
requests.dispatchEvent(new Event('input'));
