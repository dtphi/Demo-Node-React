////////////////
<html>
<script src="example1.js"></script>
<script src="example2.js"></script>
<script src="example3.js"></script>
<script src="example4.js"></script>
<script src="example5.js"></script>
<script src="example6.js"></script>
<script src="example7.js"></script>
<script src="example8.js"></script>
<script src="example9.js"></script>

<body>
<button type="button" onclick="example1()">Example1</button>
<button type="button" onclick="example2()">Example2</button>
<button type="button" onclick="example3()">Example3</button>
<button type="button" onclick="example4()">Example4</button>
<button type="button" onclick="example5()">Example5</button>
<button type="button" onclick="example6()">Example6</button>
<button type="button" onclick="example7()">Example7</button>
<button type="button" onclick="example8()">Example8</button>
<button type="button" onclick="example9()">Example9</button>
</body>
</html>
////////////////

function example1() {
	function sayHello(name) {
		var text = 'Hello ' + name;
		var sayAlert = function() { console.log(text); }
		return sayAlert;
	}
	
	say = sayHello('Tim');
	say();
}

function example2(){
	function sayHello2(name) {
		var text = 'Hello ' + name;
		var sayAlert = function() { console.log(text); }
		return sayAlert;
	}
	
	say2 = sayHello2('Bob')();
}

function example3(){
	function say123() {
		var num = 123;
		var sayAlert = function() { console.log(num); }
		num++;
		return sayAlert;
	}
	
	say = say123()();
}

function example4(){
	function setupSomeGlobals() {
		var num = 666;
		return {
			alertNumber : 		function() { console.log(num); },
			increaseNumber :	function() {num++;},
			setNumber :			function(x) {num = x; }
		};
	}
	
	var c = setupSomeGlobals();
	c.alertNumber();
	c.increaseNumber();
	c.alertNumber();
	c.setNumber(666);
	c.alertNumber();
}


function example5(){
	var fade = function (node) {
		var level = 1;
		var step = function () {
			var hex = level.toString(16);
			node.style.backgroundColor = '#FFFF' + hex + hex;
			if (level < 15) {
				level += 1;
				setTimeout(step, 100);
			}
		};
		setTimeout(step, 100);
	};
	
	fade(document.body);
}

function example6(){
	function sayAlice() {
		var sayAlert = function() { console.log(alice); }
		var alice = 'Hello Alice';
		return sayAlert;
	}
	
	sayAlice()();
}


function example7(){
	var myObject = (function inc() {
		var value = 0;
		return {
			increment: function (inc){
				value += typeof inc === 'number' ? inc : 1;
			},
			getValue:  function () {
				return value;
			}
		};
	}());
	
	myObject.increment(5);
	console.log(myObject.getValue());
}

function example8(){
	var Counter = (function() {
		var privateCounter = 0;
		function changeBy(val) {
			privateCounter += val;
		}
		return {
			increment: function(){
				changeBy(1);
			},
			decrement: function(){
				changeBy(-1);
			},
			value: function(){
				return privateCounter;
			}
		}
	}());
	
	console.log(Counter.value());  // Prints 0
	Counter.increment();
	Counter.increment();
	console.log(Counter.value());  // Prints 2
	Counter.decrement();
	console.log(Counter.value());  // Prints 1
}

function example9(){

	var funcs = [];

	function createfunc(i) {
		return function() { console.log("My value: " + i); };
	}

	for (var i = 0; i < 3; i++) {
		funcs[i] = createfunc(i);
	}

	for (var j = 0; j < 3; j++) {
		funcs[j]();                        
	}

}

/*
	var funcs = {};
	for (var i = 0; i < 3; i++) {          
		funcs[i] = function() {            
			console.log("My value: " + i); 
		};
	}
	for (var j = 0; j < 3; j++) {
		funcs[j]();                        
	}
*/