'use strict';

import Users from 'users.js';

var users;

users = new Users([
	{ age: 23 },
	{ age: 19 },
	{ age: 51 },
	{ age: 39 }
], 'age');
console.log('ordered min', users.min());
console.log('ordered max', users.max())

users = new Users([
	{ age: 23 },
	{ age: 19 },
	{ age: 51 },
	{ age: 39 }
]);
console.log('unordered min', users.min('age'));
console.log('unordered max', users.max('age'));
