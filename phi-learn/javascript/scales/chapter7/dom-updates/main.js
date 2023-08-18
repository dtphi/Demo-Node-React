function defer(func, args) {
	setTimeout(function() {
		func.apply(undefined, args);
	}, 1);
}

function work() {
	var i = 100000;
	while (--i) {
		for (let c = 0; c < 100; c++) {
			i * c;
		}
	}
}

function iterate(coll=[], pos=0) {
	work();

	document.getElementById('progress').textContent = 
		Math.round(pos / coll.length * 100) + '%';

	if (++pos < coll.length) {
		defer(iterate, [ coll, pos ]);
	}
}

iterate(new Array(1000).fill(true));
