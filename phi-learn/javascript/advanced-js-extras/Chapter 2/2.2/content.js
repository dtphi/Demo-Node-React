// object properties
function example3(){
	var flight = {
		airline: "Oceanic",
		number: 815,
		status: "On-time",
		departure: {
			airport: "SYD",
			time: "2004-09-22 14:55",
			city: "Sydney"
		},
		arrival: {
			airport: "LAX",
			time: "2004-09-23 10:42",
			city: "Los Angeles"
		}
	};
	// Reflection
	console.log("------Reflection-------");
	console.log(typeof flight.airline); // string
	console.log(typeof flight.number);  // number
	console.log(typeof flight.constructor); // function
	console.log(flight.hasOwnProperty('number')); // true
	console.log(flight.hasOwnProperty('constructor')); // false
	console.log(flight.propertyIsEnumerable("number")); // true
	console.log(flight.propertyIsEnumerable("toString")); // false
	console.log(Object.prototype.isPrototypeOf(flight)); // true
	
	console.log("----Enumeration---");
	// Enumeration
	for(var prop in flight){
		if (typeof flight[prop] !== 'function'){
			console.log(prop);
		}
	}
	console.log("---read and write to properties------");
	// access and update status property
	console.log("status: " + flight.status);
	flight.status = "Delayed";
	console.log("status: " + flight["status"]); 
	
	// Access errors
	flight.airline.airport;  // undefined
	// flight.airline.airport.name; //TypeError
	
	console.log("---------delete a property--------");
	// Delete property
	delete flight.status;
	console.log(flight.hasOwnProperty("status")); // false
	
	// Add a property
	flight.departure.terminal = "A";
	flight.arrival.terminal = "24";
	
	console.log("-------testing a property--------");
	// Testing properties
	console.log(flight.hasOwnProperty("departure")); //true
	console.log(flight.arrival.hasOwnProperty("terminal")); //true
}
