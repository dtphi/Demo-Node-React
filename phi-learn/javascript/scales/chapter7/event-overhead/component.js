import events from 'events.js';

export default class Component {

	constructor() {
		events.trigger('CreateComponent');
		events.listen('CreateComponent', () => {
			var i = 100000;
			while (--i) {
				for (let c = 0; c < 100; c++) {}
			}			
		});
	}

};
