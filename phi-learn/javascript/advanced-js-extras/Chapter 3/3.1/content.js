function example1(){
	// create new arrays
	var a = [];
	var sparse = [0, 1.1, , true, , "x", , {z:4, r:7}]; // creates sparse array
	var empty = new Array();  	// creates empty array
	var array = new Array(5);	// single argument, represents length
	var array2 = new Array(1, 2, 3, 4, 5); // [1 2 3 4 5]
	console.log(sparse[6]);	  // undefined
	console.log(sparse[-1]);  // undefined, "-1" treated as object property
							  // not as array index, which is non-existent
	console.log(sparse.length);  // 8
	console.log(empty.length);   // 0
	console.log(a.length);  	 // 0
	console.log(array.length);   // 5
	console.log(array2.length);  // 5
}
