function match() {
	for (let route of routes) {
		if (route.route.test(uri)) {
			console.log('match', route.name);
			break;
		}
	}
}


var uri = 'users/abc';

var routes = [
	{ route: /^users/, name: 'users' },
	{ route: /^users\/(\w+)/, name: 'user' }
];

match();
// → match users

routes.reverse();

match();
// → match user
