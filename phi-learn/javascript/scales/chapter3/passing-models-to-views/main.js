'use strict';

// A super simple model class.
class Model {
	constructor(first, last, age) {
		this.first = first;
		this.last = last;
		this.age = age;
	}
}

// The base view, with a name method that
// generates some output.
class BaseView {
	name() {
		return `${this.model.first} ${this.model.last}`;
	}
}

// Extends BaseView with a constructor that accepts
// a model and stores a reference to it.
class GenericModelView extends BaseView {
	constructor(model) {
		super();
		this.model = model;
	}
}

// Extends GenericModelView with specific constructor
// arguments.
class SpecificModelView extends BaseView {
	constructor(first, last, age) {
		super();
		this.model = new Model(...arguments);
	}
}

var properties = [ 'Terri', 'Hodges', 41 ];

// Make sure the data is the same in both views.
// The name() method should return the same result...
console.log('generic view',
	new GenericModelView(new Model(...properties)).name());
console.log('specific view',
	new SpecificModelView(...properties).name());
