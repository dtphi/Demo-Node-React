import ClickEvent from 'click-event.js';

var clickEvent = new ClickEvent({
	type: 'app.button.click',
	target: 'button.next',
	moduleState: 'enabled'
});

console.log(clickEvent);
