export default class Model {

	constructor(pattern, id) {
		this.pattern = pattern;
		this.id = id;
	}

	get uri() {
		return '#' + this.pattern.replace(/:\w+/, this.id);	
	}

}
