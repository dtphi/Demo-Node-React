import events from 'events.js';

export default class Router {

	constructor() {
		this.routes = [];
	}

	add(pattern, name, guard) {
		this.routes.push({
			pattern: new RegExp('^' +
				pattern.replace(/:\w+/g, '(.*)')),
			name: name,
			guard: guard
		});
	}

	start() {
		var onHashChange = () => {
			for (let route of this.routes) {
				let guard = route.guard;
				let result = route.pattern.exec(
					location.hash.substr(1));

				if (result) {					
					if (typeof guard === 'function' && guard()) {
						events.trigger('route:' + route.name, {
							values: result.splice(1)
						});
					}
					break;
				}
			}
		};
		
		window.addEventListener('hashchange', onHashChange);
		onHashChange();
	}

}
