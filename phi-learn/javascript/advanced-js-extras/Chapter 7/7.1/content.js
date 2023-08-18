/////////////////
// Perform a case-insensitive and global matching for "iphone"
function example1(){
	var str = "Develop iPhone and iPad applications";
	var patt1 = /iphone/i;
	var result = str.match(patt1);
	console.log(result);
	document.getElementById("demo").innerHTML=result;
}
// Global search for "is"
function example2(){
	var str = "Is this all there is?";
	var patt1 = /is/g;
	var result = str.match(patt1);
	console.log(result);
	document.getElementById("demo").innerHTML=result;
}

// global, case-insensitive search for "is"
function example3(){
	var str = "Is this all there is?";
	var patt1 = /is/gi;
	var result = str.match(patt1);
	console.log(result);
	document.getElementById("demo").innerHTML=result;
}
