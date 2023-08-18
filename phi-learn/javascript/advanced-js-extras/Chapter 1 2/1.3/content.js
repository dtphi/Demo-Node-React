/////////////////////////////
<html>
<script src="fO_1.js"></script>
<script src="fO_2.js"></script>
<script src="fO_3.js"></script>

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
<button type="button" onclick="example10()">Example10</button>
<button type="button" onclick="example11()">Example11</button>
<button type="button" onclick="example12()">Example12</button>
<button type="button" onclick="example13()">Example13</button>
<button type="button" onclick="example14()">Example14</button>
</body>
</html>
///////////////////////////////

function example1(){
	function add(x, y){
		return (x+y);
	}
	console.log(add(2, 3));
}

function example2(){
	var add = function(x, y){
		return (x+y);
	}
	console.log(add(2, 3));
}

function example3(){
	var add = new Function("x", "y", "return (x+y);");
	console.log(add(2, 3));
}

// Arguments property
function example4(){
	var sum = function() {
		var i, sum = 0;
		for(i = 0; i < arguments.length; i++){
			sum += arguments[i];
		}
		return sum;
	};
	console.log(sum(4,8,15,16,23,42)); // 108
}

// Callee property
function example5(){
	var factorial = function(n){
	  if (n <= 0)
		 return 1;
	  else
		 return n * arguments.callee(n - 1)
	}
	console.log(factorial(4));  // 24
}

// Caller property
function example6(){
	CallLevel();
}
function CallLevel(){
	if (CallLevel.caller == null)
		console.log("Called by top level");
	else
		console.log("Called by another function");
}
//CallLevel(); // Call from top level

// Constructor property
function example7(){
	function myObj(){
		this.number = 1;
	}
	
	var x = new String("Hi");
	
	if (x.constructor == String)
		console.log("Object is a string.")
		
	var y = new myObj();
	if (y.constructor == myObj)
		console.log("Object constructor is myObj")
}

//Length property
function example8(){
	function myFunc(a, b){
	console.log(myFunc.length +","+
				arguments.length);
	}
	myFunc(1, 2);   // 2,2
	myFunc(1, 2, 3);  // 2,3
	myFunc(1);    // 2,1
}

// Prototype property
function example9(){
	function array_max(){
		var i, max = this[0];
		for (i=1 ; i < this.length; i++){
			if (max < this[i])
				max = this[i];
		}
		return max;
	}
	Array.prototype.max = array_max;
	var myArray = new Array(7, 1, 3, 11, 25, 9);
	console.log(myArray.max());
}

// apply method
function example10(){
	function callMe(a, b){
	console.log("this: " + this +
	" a: " + a + " b: " + b);
		for(i in callMe.arguments)
			console.log(callMe.arguments[i]);
	}
	callMe(1, 2);
	callMe.apply(3, [ 4,5 ]);
}

// bind method
function example11(){
	var checkRange = function (value) {
	if (typeof value !== 'number')
        return false;
    else
        return value >= this.minimum && 
			   value <= this.maximum;
	}
	// The range object will become the 
	// this value in the callback function.
	var range = { minimum: 10, maximum: 20 };

	// Bind the checkRange function.
	var boundCheckRange = checkRange.bind(range);

	// Use the new function to check whether 12 is in the numeric range.
	var result = boundCheckRange(12);
	console.log(result);
}

// call method
function example12(){
	function callMe(a, b){
		console.log("this:" + this +
		" a:" + a + " b:" + b);
		for(i in callMe.arguments)
			console.log(callMe.arguments[i]);
	}
	callMe(1, 2); //this:[object Window] 1 2
	callMe.call(3, 4, 5); //this:3 4 5
}

//toString method
function example13(){
	function CreateRadixTable (){
	   var s = "";
	   // Create table heading.
	   s += "   Hex    Dec   Bin \n";
	   for (x = 0; x < 16; x++)
	   {
		  s += "   ";
		  // Convert to hexidecimal.
		  s += x.toString(16);
		  s += "     ";
		  if (x < 10) s += "  ";
		  
		  // Convert to decimal.
		  s += x.toString(10);
		  s += "     ";
		  
		  // Convert to binary.
		  s += x.toString(2);
		  s += "\n";
	   }
	   return(s);
	}
	console.log(CreateRadixTable());
}

function example14(){
	function f(){ }
	// returns function itself.
	console.log(f.valueOf()); 
}