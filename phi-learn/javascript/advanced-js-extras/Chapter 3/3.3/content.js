function example3(){
	var a = [1,2,3,4,5];	// non-sparse
	var array = [1,null,3,undefined,5, , 7, null, , 8];	// sparse array
	var i;			// index variable
	
	console.log("---------------");
	for (i in a)	// printing non-sparse array
		console.log(a[i]);
	
	console.log("---------------");
	for(i = 0; i < array.length; i++){		// looping sparse array
		if(!array[i]) continue;  // skip nulls, undefined and non-existent
		console.log(array[i]);
	}
	
	// Multidimensional array
	console.log("--------------");
	var table = new Array(5);  // 5 rows
	for(i = 0; i < table.length; i++)
		table[i] = new Array(5);  // 5 columns
		
	for(var row = 0; row < table.length; row++){
		for(var col = 0; col < table[row].length; col++){
			table[row][col] = row * col;
		}
	}
	console.log(table[2][3]);  // 6
}
