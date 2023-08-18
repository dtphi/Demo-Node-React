import Router from 'router.js';
import events from 'events.js';
import User from 'user.js';
import Group from 'group.js';

var router = new Router()

router.add(User.pattern(), 'user');
router.add(Group.pattern(), 'group');

events.listen('route:user', (data) => {
	console.log(`User ${data.values[0]} activated`);
});

events.listen('route:group', (data) => {
	console.log(`Group ${data.values[0]} activated`);
});

var user = new User(1);
document.querySelector('.user').href = user.uri;

var group = new Group(1);
document.querySelector('.group').href = group.uri;

router.start();
