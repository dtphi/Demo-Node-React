import Router from 'router.js';
import events from 'events.js';

var router = new Router()

router.add('open', 'open');
router.add('guarded', 'guarded', () => {
	return !!Math.round(Math.random());
});

events.listen('route:open', () => {
	console.log('open route is always accessible');
});

events.listen('route:guarded', (data) => {
	console.log('made it past the guard function!');
});

router.start();
