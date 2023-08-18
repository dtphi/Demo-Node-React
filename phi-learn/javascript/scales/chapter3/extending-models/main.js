'use strict';

// The base fetch() implementation of a model, sets
// some property values, and resolves the promise.
class BaseModel {
	fetch() {
		return new Promise((resolve, reject) => {
			this.id = 1;
			this.name = 'foo';
			resolve(this);
		});
	}
}

// Extends BaseModel with a specific implementation
// of fetch().
class SpecificModel extends BaseModel {

	// Overrides the base fetch() method. Returns
	// a promise with combines the original
	// implementation and result of calling fetchSettings().
	fetch() {
		return Promise.all([
			super.fetch(),
			this.fetchSettings()
		]);
	}

	// Returns a new Promise instance. Also sets a new
	// model property.
	fetchSettings() {
		return new Promise((resolve, reject) => {
			this.enabled = true;
			resolve(this);
		});
	}
}

// Make sure the properties are all in place, as expected,
// after the fetch() call completes.
new SpecificModel().fetch().then((result) => {
	var [ model ] = result;
	console.assert(model.id === 1, 'id');
	console.assert(model.name === 'foo');
	console.assert(model.enabled, 'enabled');
	console.log('fetched');
});
