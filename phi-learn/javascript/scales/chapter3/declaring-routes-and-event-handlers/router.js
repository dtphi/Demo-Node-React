'use strict';

import Events from 'events.js'

// A router is a type of event broker, it
// can trigger routes, and listen to route
// changes.
export default class Router extends Events {

	// If a route configuration object is passed,
	// then we iterate over it, calling listen()
	// on each route name. This is translating from
	// route specs to event listeners.
	constructor(routes) {
		super();

		if (routes != null) {
			for (let key of Object.keys(routes)) {
				this.listen(key, routes[key]);
			}
		}
	}

	// This is called when the caller is ready to start
	// responding to route events. We listen to the
	// "onhashchange" window event. We manually call
	// our handler here to process the current route.
	start() {
		window.addEventListener('hashchange',
			this.onHashChange.bind(this));

		this.onHashChange();
	}

	// When there's a route change, we translate this into
	// a triggered event. Remember, this router is also an
	// event broker. The event name is the current URI.
	onHashChange() {
		this.trigger(location.hash, location.hash);
	}

};
