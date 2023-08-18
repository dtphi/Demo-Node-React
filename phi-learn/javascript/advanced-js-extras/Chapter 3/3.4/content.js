function example4(){
	// join, converts elements to strings,concatenates, returns string
	var a = [1,2,3,4,5];
	console.log(a.join())
	
	console.log("-----------------")
	// reverse, reverses elements of array and returns reversed array
	// modifies array
	console.log(a.reverse())
	
	console.log("----------------")
	// sort(), sorts elements in alphabetical order, case-sensitive
	// modifies array
	// sort(<comparison function>), sorts non-alphabetically
	// comparison function: decides on 2 element comparison
	//						if first > second, return > 0
	//						if first < second, return < 0
	//						if first == second, return 0
	var fruits = ["apple", "orange", "Banana"];
	console.log(fruits.sort());
	console.log(fruits.sort(function(s, t){
				var a = s.toLowerCase();
				var b = t.toLowerCase();
				if (a < b) return -1;
				if (a > b) return 1;
				return 0;
				}))
	
	// concat, returns new array with concatenated elements
	// returns new concatenated array
	var x = [1,2,3]; // [1,2,3]
	var y = x.concat([4,5,[6,7]]); // [1,2,3,4,5,[6,7]]

	console.log("-------------");
	// slice(x,y), returns subarray [x,y), does not modify array
	// x : start index, inclusive
	// y : end index, exclusive
	// index:[ 0,  1,  2,  3,  4]
	// index:[-5, -4, -3, -2, -1]
	var z =  [ 1,  2,  3,  4,  5];
	console.log(z.slice(0,3));   // [1,2,3]
	console.log(z.slice(3));     // [4,5]
	console.log(z.slice(1,-1));  // [2,3,4]
	console.log(z.slice(-3,-2)); // [3]
	
	console.log("------------------------");
	// splice(x,y), x:deleting index, y:number of elements to delete
	// modifies the array, moves elements over to the left
	var f = [1,2,3,4,5,6,7,8];
	console.log(f.splice(4));	 // Returns [5,6,7,8], f is [1,2,3,4]
	console.log(f.splice(1,2));  // Returns [2,3], f is [1,4]
	console.log(f.splice(1,1));  // Returns [4], f is [1]
	
	// push()->append at the end of array
	// pop()->deletes at the end of array
	// modify the array in place
	var stack = [];
	stack.push(1,2) 	// [1,2]
	stack.pop();    	// [1]
	stack.push(3);  	// [1,3]
	stack.pop();    	// [1]
	stack.push([4,5])	// [1,[4,5]]
	stack.pop();		// [1]
	stack.pop();		// []
	
	// shift->delete at the beginning, shifts elements to the left
	// unshift->insert at the beginning, shifts elements to the right
	var h = [];
	h.unshift(1);		// [1]
	h.unshift(2);		// [2,1]
	h.shift();			// [1]
	h.unshift(3,[4,5]); // [3,[4,5],1]
	h.shift();			// [[4,5],1]
	h.shift();			// [1]
	h.shift();			// []
	
	// toString()->returns string with array elements
	console.log("--------------------");
	console.log([1,2,3].toString());	// '1,2,3'
	console.log([1,[2,'c']].toString()); // '1,2,c'
	
	console.log("--------------");
	// indexOf()->returns the index for the first occurrence of an element
	// lastIndexOf()->returns the index for last occurrence of an element
	var g = [0,3,2,0,1,2,3,5,6,3];
	console.log(g.indexOf(5));			// 7
	console.log(g.lastIndexOf(3));		// 9
	
	/////////////////////////////////////////
	console.log("---Array methods----");
	// forEach, map, filter, every, some, reduce, reduceRight 
	// First argument is a function and invoke that function once for each
	// element of the array
	// function takes 3 arguments:
	// 				1st is the value of each element in array
	// 				2nd, is the value of this keyword, 
	//				3rd is return value
	//////////////////////////////////////////
	//	forEach
	var array = [1,2,3,4,5];
	var sum = 0;
	array.forEach(function(value) {sum += value});
	console.log(sum);			// 15
	
	// map
	var m = array.map(function(x) {return x * x});	
	console.log(m)		//	[1,4,9,16,25]
	
	//	filter
	var smallerthan3 = array.filter(function(x) { return x < 3 });
	console.log(smallerthan3);	//  [1,2]
	
	// every and some, returns true or false
	console.log(array.every(function(x) {return x < 10})); // true, all <10
	console.log(array.some(function(x) { return x%2 === 0 })); // true, some even
	
	// reduce->combine elements and produce single value
	// reduce(previousValue,currentValue,index,array), initial value(optional)
	console.log([0,1,2,3,4,5].reduce(function(x,y) {return x+y}, 0)) // 15=0+15
	
	// reduceRight(previousValue, currentValue, index, array), initial value (optional)
	console.log([0,1,2,3,4].reduceRight(function(x,y) {return x+y}))
	// previousValue = 4, currentValue = 3, index = 3
	// previousValue = 7, currentValue = 9, index = 2
	// previousValue = 9, currentValue = 1, index = 1
	// previousValue = 10,currentValue = 0, index = 0
	// Return 10
	console.log([0,1,2,3,4].reduceRight(function(x,y) {return x+y}, 10));
	// previousValue = 10, currentValue = 4, index = 4
	// previousValue = 14, currentValue = 3, index = 3
	// previousValue = 17, currentValue = 2, index = 2
	// previousValue = 19, currentValue = 1, index = 1
	// previousValue = 20,currentValue = 0, index = 0
	// Return 20
}