'use strict';

import ComponentFirst from 'component-first.js';
import ComponentSecond from 'component-second.js';

var firstComponent = new ComponentFirst(),
	secondComponent = new ComponentSecond();

console.log('first fetch...');
firstComponent.fetch();
firstComponent.fetch().then((model) => {
	console.log(model);
});

console.log('second fetch...');
secondComponent.fetch();
secondComponent.fetch().then((model) => {
	console.log(model);
});
