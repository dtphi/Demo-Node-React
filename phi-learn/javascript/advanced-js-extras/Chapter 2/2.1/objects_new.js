// Object literal inherits from Object.prototype
function example1(){
	var obj = {};
	var employee = {
		"first-name" : "Jerome",
		"last-name" : "Howard"
	};
	var fligth = {
		airline: 815,
		departure: {
			IATA: "SYD",
			time: "2004-09-22 14:55",
			city: "Sydney"
		},
		arrival: {
			IATA: "LAX",
			time: "2004-09-23 10:42",
			city: "Los Angeles"
		}
	};
}

// new and Object.create
function example2(){
	var obj = new Object(); // {}
	var arr = new Array();  // []
	var date = new Date();  // current time
	var regex = new RegExp("js"); // regex for pattern matching
	
	var obj1 = Object.create({x:1, y:2}); //inherits x,y
	var obj2 = Object.create(null);   //inherits nothing
	var obj3 = Object.create(Object.prototype); // {}
	
	var point = Object.create({x:1, y:2});
	console.log(point);
	console.log("-------------");
	
	var circle = new Object({p: point,
							 r: 3,
							 area: function(r){return Math.PI * r * r}
							});
	
	console.log(circle.p = {x:2 , y:2});
	console.log("circle.area: " + circle.area(2.0));
	
	var sphere = {circle: circle, 
			volume: (4/3) * Math.PI * circle.r * circle.r * circle.r};
	console.log(sphere.circle);
	console.log("sphere.volume: " + sphere.volume);
	
	//	Legacy API for Getters and Setters
	//  __lookupGetter__() , __lookupSetter__()
	//  __defineGetter__() , __defineSetter__()
}
