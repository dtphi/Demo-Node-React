function withSideEffects(model) {
	if (model.state === 'running') {
		model.state === 'off';
	}

	return model;
}

function withoutSideEffects(model) {
	return Object.assign({}, model, model.state === 'off' ?
		{ state: 'running' } : {});
}

var first = { state: 'running' },
	second = { state: 'off' },
	result;

result = withSideEffects(first);
console.log('with side effects...');
console.log('original', first.state);
console.log('result', result.state);

result = withoutSideEffects(second);
console.log('without side effects...');
console.log('original', second.state);
console.log('result', result.state);
