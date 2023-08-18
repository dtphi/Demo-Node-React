function example5(){
	var jspy = (function() {
		// private variables
		var _count = 0;
		
		// private methods
		var incrementCount = function(){_count++;};
		var resetCount = function() {_count = 0;};
		var getCount = function() {return _count;};
		
		// public API
		return{
			increment:	incrementCount,
			reset:	resetCount,
			get:	getCount
		};
	})();
	
	jspy.increment();
	console.log(jspy.get());
	jspy.reset();
	console.log(jspy.get());
}


function example6(){
	// create the root namespace and making sure we're not 
	// overwriting it
	var MYAPPLICATION = MYAPPLICATION || {};
	 
	// create a general purpose namespace method
	// this will allow us to create namespace a bit easier
	MYAPPLICATION.createNS = function (namespace) {
		var nsparts = namespace.split(".");
		var parent = MYAPPLICATION;
	 
		// we want to be able to include or exclude the root 
		// namespace. So we strip it if it's in the namespace
		if (nsparts[0] === "MYAPPLICATION") {
			nsparts = nsparts.slice(1);
		}
	 
		// loop through the parts and create 
		// a nested namespace if necessary
		for (var i = 0; i < nsparts.length; i++) {
			var partname = nsparts[i];
			// check if the current parent already has 
			// the namespace declared, if not create it
			if (typeof parent[partname] === "undefined") {
				parent[partname] = {};
			}
			// get a reference to the deepest element 
			// in the hierarchy so far
			parent = parent[partname];
		}
		// the parent is now completely constructed 
		// with empty namespaces and can be used.
		return parent;
	};
	 
	// Create the namespace for products
	MYAPPLICATION.createNS("MYAPPLICATION.MODEL.PRODUCTS");
	 
	MYAPPLICATION.MODEL.PRODUCTS.product = function(width, height){
		// private variables
		var dimensions = {
			width: width,
			height: height
		};
		// private methods
		// creating getWidth and getHeight
		// to prevent access by reference to dimensions
		var getWidth = function(){
			return dimensions.width;
		};
		var getHeight = function(){
			return dimensions.height;
		};
		// public API
		return {
			getWidth: getWidth,
			getHeight: getHeight
		};
	};
	 
	// Create the namespace for the logic
	MYAPPLICATION.createNS("MYAPPLICATION.LOGIC.BUSINESS");
	MYAPPLICATION.LOGIC.BUSINESS.createAndAlertProduct = function () {
		var model = MYAPPLICATION.MODEL.PRODUCTS;
		var p = new model.product(50,100);
		console.log(p.getWidth() + " " + p.getHeight());
	};
	
	with(MYAPPLICATION.LOGIC.BUSINESS){
		createAndAlertProduct();
	}
}