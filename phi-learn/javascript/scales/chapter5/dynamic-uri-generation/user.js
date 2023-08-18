import Model from 'model.js';

export default class User extends Model {

	static pattern() {
		return 'user/:id';
	}

	constructor(id) {
		super(User.pattern(), id);
	}

}
