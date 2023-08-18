'use strict';

function fetch() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (Math.round(Math.random())) {
				resolve();
			} else {
				reject();
			}
		}, 1000);
	});
}

export default fetch;
