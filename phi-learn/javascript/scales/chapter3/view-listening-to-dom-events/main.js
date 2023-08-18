import Events from 'events.js';

// A basic model. It extending "Events" so it
// can listen to events triggered by other components.
class Model extends Events {
	constructor(enabled) {
		super();
		this.enabled = !!enabled;
	}

	// Setters and getters for the "enabled" property.
	// Setting it also triggers an event. So other components
	// can listen to the "enabled" event.
	set enabled(enabled) {
		this._enabled = enabled;
		this.trigger('enabled', enabled);
	}

	get enabled() {
		return this._enabled;
	}
}

// A view component that takes a model and a DOM element
// as arguments.
class View {
	constructor(element, model) {

		// When the model triggers the "enabled" event,
		// we adjust the DOM.
		model.listen('enabled', (enabled) => { 
			element.setAttribute('disabled', !enabled);
		});

		// Set the state of the model when the element is
		// clicked. This will trigger the listener above.
		element.addEventListener('click', () => {
			model.enabled = false;
		});
	}
}

new View(document.getElementById('set'), new Model());
