import Component from 'component.js';

var components = [];

document.getElementById('add')
	.addEventListener('click', function() {
		console.clear();
		console.time('event overhead');
		components.push(new Component());
		console.timeEnd('event overhead');
		console.log('components', components.length);
	});
