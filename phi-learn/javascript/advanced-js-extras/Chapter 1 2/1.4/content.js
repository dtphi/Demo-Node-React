///////////////////////
<html>
<script src="vl.js"></script>

<body>
<button type="button" onclick="example1()">Example1</button>
<button type="button" onclick="example2()">Example2</button>
<button type="button" onclick="example3()">Example3</button>
<body>

</html>
/////////////////////
	function example1(){
	function helper(){
		for(i in helper.arguments)
			console.log(arguments[i]);
	}
	function foo(args){		
		helper(args.email || '',
		       args.name || '',
			   args.address || null,
			   args.age || null);
	}
	foo({name:'Ken',address:'main st.',email:'usr@ltp.tv'});
	foo({name:'Mary',email:'mary@user.com',age:27});
}

function example2(){
	function load(context){
		var defaults = {
			name: 'usr1',
			address: 'address',
			phone: '(123)456-7890'
		};
		var context = extend(defaults, context);
		console.log(context);
	}
	function extend(){
		for(var i = 1; i < arguments.length; i++)
			for(var key in arguments[i])
				if(arguments[i].hasOwnProperty(key))
					arguments[0][key] = arguments[i][key];
		return arguments[0];
	}
	load({name:'Ken',address:'123 main',age:28})
	load({email:'ltp@tv'});
	load({phone:'867-5309'});
}

function example3(){
	var add = function(a, b){
		if(typeof a !== 'number' || typeof b !== 'number'){
			throw {
				name: 'TypeError',
				message: 'add needs numbers'
			};
		}
		return a + b;
	}
	var try_it = function() {
		try {
			add("seven");
		} catch(e) {
			console.log(e.name + ' : ' + e.message);
		}
	}
	try_it("seven");
}