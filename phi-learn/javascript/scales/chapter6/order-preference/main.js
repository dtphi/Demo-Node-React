import Users from 'users.js';

var users = new Users([
	{ name: 'Albert' },
	{ name: 'Craig' },
	{ name: 'Beth' }
], 'name');

console.log('Ascending order...');
for (let user of users) {
	console.log(user.name);
}
// →
// Albert
// Beth
// Craig

users.order = 'name desc';

console.log('Descending order...');
for (let user of users) {
	console.log(user.name);
}
// →
// Craig
// Beth
// Albert
