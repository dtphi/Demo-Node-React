export default class ClickEvent {

	constructor(properties) {
		this.type = 'app.click';
		this.timestamp = new Date();
		Object.assign(this, properties);
	}

}
