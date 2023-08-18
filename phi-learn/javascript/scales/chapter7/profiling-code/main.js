function whileLoop() {
	var i = 100000;

	while (--i) {
		forLoop1(i);
		forLoop2(i);
	}
}

function forLoop1(max) {
	for (var i = 0; i < max; i++) {
		i * i;
	}
}

function forLoop2(max) {
	max /= 2;
	for (var i = 0; i < max; i ++) {
		i * i;
	}
}

console.profile('main');
whileLoop();
console.profileEnd('main');
// →
// 1177.9ms 1.73% forLoop1
// 1343.2ms 1.98% forLoop2
