import events from 'events.js';

export default class Router {

	constructor() {
		this.routes = [];
	}

	add(pattern, name) {
		this.routes.push({
			pattern: new RegExp('^' +
				pattern.replace(/:\w+/g, '(.*)')),
			name: name
		});
	}

	start() {
		var onHashChange = () => {
			for (let route of this.routes) {
				let result = route.pattern.exec(
					location.hash.substr(1));
				if (result) {
					events.trigger('route:' + route.name, {
						values: result.splice(1)
					});
					break;
				}
			}
		};
		
		window.addEventListener('hashchange', onHashChange);
		onHashChange();
	}

}
