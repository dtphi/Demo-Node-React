function example2(){
	var array = [1,2,3,4,5]
	// Read and write to arrays
	console.log("---------------");
	array[5] = 6; // [1 2 3 4 5 6]
	console.log(array.length); // 6
	array["10"] = 11;  // set element at index 10 with value 11
						// "10" behaves like array index and not as object
						// property
	console.log(array.length); // length = 11, only 7 elements in array
	
	// sparse arrays
	console.log("----------");
	var a = new Array(5); // length 5 and no elements
	var a1 = [,,];  // length = 2 with no elements
	var a2 = [undefined,,];  // length = 2 with 1 undefined element
	console.log(a1.length); // 2
	console.log(a2.length); // 2
	console.log(0 in a1); // false, a1 has no element at 0
	console.log(0 in a2); // true, a2 has element undefined at 0
	
	// array.length
	var b = [1,2,3,4,5]; // [1,2,3,4,5]
	b.length = 3; // [1,2,3]
	b.length = 0; // delete all elements
	b.length = 5; // length = 5, no elements
	
	// add and delete elements from an array
	console.log("-----------------");
	var c = [];
	c.push(1,2,3);  
	console.log(c);  	// [1, 2, 3]
	delete c[1];    	
	console.log(c)		// [1, , 3]  sparse array
	console.log(1 in c); // false
	console.log(c.length); // 3
}
