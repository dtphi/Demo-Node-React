function example4(){
	function mymodule(){
	// Module code goes here.
	// Any variables used by the module are local to this function
	// instead of cluttering up the global namespace.
	}
	mymodule();	// But don't forget to invoke the function!
	
	
	(function() { // mymodule function rewritten as unnamed expression
		// Module code goes here
	}());	// end the function literal and invoke it now.
	
	// Create a single global variable to hold all collection-related
	// modules
	var collections = collections || {};
	collections.sets = (function namespace() {
		// ..Module code..
		
		// export API by returning a namespace object
		return {
			AbstractSet: AbstractSet,
			NotSet:	NotSet
		};
	}());
	
	var collections = collections || {};
	collections.sets = (new function namespace() {
		// ..Module code..
		this.AbstractSet = AbstractSet;
		this.NotSet = NotSet;
	}());
	
	var collections = collections || {};
	collections.sets = {};
	(function namespace() {
		// .. Module code..
		collections.sets.AbstractSet = AbstractSet;
		collections.sets.NotSet = NotSet;
	}());	
}
