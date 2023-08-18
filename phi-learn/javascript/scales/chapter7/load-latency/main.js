import 'delay.js';

document.getElementById('do-link')
	.addEventListener('click', function(e) {
		e.preventDefault();
		console.log('clicked');
	});
