'use strict';

import Component from 'component.js';

function onInput() {
	var collection = new Array(+data.value).fill(1000),
		size = +components.value,
		cnt = 0;

	console.clear();

	console.time(`${size} components, ${collection.length} items`);
	while (cnt++ < size) {
		new Component(collection);
	}
	console.timeEnd(`${size} components, ${collection.length} items`);
}

var components = document.getElementById('components'),
	data = document.getElementById('data');

components.addEventListener('input', onInput);
data.addEventListener('input', onInput);

components.dispatchEvent(new Event('input'));
