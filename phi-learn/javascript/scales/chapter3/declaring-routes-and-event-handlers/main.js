// Creates a router instance, and uses two different
// approaches to listening to routes.
//
// The first is by passing configuration to the Router.
// The key is the actual route, and the value is the
// callback function.
//
// The second uses the listen() method of the router,
// where the event name is the actual route, and the
// callback function is called when the route is activated.
//
// Nothing is triggered until the start() method is called,
// which gives us an opportunity to set everything up. For
// example, the callback functions that respond to routes
// might require something to be configured before they can
// run.
'use strict';

import Router from 'router.js'

function logRoute(route) {
	console.log(`${route} activated`);
}

var router = new Router({
	'#route1': logRoute
});

router.listen('#route2', logRoute);

router.start();
