document.getElementById('do-link')
	.addEventListener('click', function(e) {
		e.preventDefault();

		// In ES6, it's just "System.import()" - which isn't easy
		// to do across environments yet.
		var loader = new traceur.runtime.BrowserTraceurLoader();
		loader.import('stuff.js').then(function(stuff) {
			stuff.default();
		});
	});
