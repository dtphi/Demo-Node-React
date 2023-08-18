//////////////////
<html>
<script src="scope.js"></script>
<script src="scope2.js"></script>
<body>
<button type="button" onclick="example1()">Example1</button>
<button type="button" onclick="example2(5)">Example2</button>
<button type="button" onclick="example3()">Example3</button>
<button type="button" onclick="example4()">Example4</button>
<button type="button" onclick="example5()">Example5</button>
<button type="button" onclick="example6()">Example6</button>
<button type="button" onclick="example7()">Example7</button>
<button type="button" onclick="example8()">Example8</button>
</body>
</html>
//////////////////
var a = 1;  // global variable

// global scope
function example1(){
	console.log(a)
}

// example2(5)
// local scope
function example2(a){
	console.log(a)
}

// local scope
function example3() {
	var a = 3
	console.log(a)
}

// no block scope, alerts '4', not global value '1'
function example4() {
	if(true){
		var a=4;
	}
	console.log(a);
}

// variables as properties
function example5() {
	var truevar = 1;  // non-deletable
	fakevar = 2;   // deletable property
	this.fakevar2 = 3;  // deletable property
	console.log(delete truevar) // not deleted!
	console.log(delete fakevar) // deleted
	console.log(delete this.fakevar2) // deleted
}

var scope = "global scope"; // global variable

// local scope
function example6(){
	function localscope(){
		var scope = "local";
		return scope;
	}
	console.log(localscope())
}

// global variable overwrite
function example7(){
	function localscope(){
		scope = "local";
		myscope = "local";
		return [scope, myscope];
	}
	console.log(localscope())
	console.log(scope)
	console.log(myscope)
}

// nested scope
function example8() {
	function localscope(){
		var scope = "local scope";
		function nestedscope(){
			var scope = "nested scope";
			return scope;
		}
		return nestedscope()
	}
	console.log(localscope())
}