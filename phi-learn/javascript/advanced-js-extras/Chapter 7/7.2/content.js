// Seach a string for the character "e" using test()
function example4(){
	var patt1=new RegExp("e");
	console.log(patt1.test("The best things in life are free"));
}

// Search a string for the character "e" using exec()
function example5(){
	var patt1=new RegExp("ee");
	console.log(patt1.exec("The best things in life are free"));
}

// toString()
function example6(){
	var patt = new RegExp("Hello World","g");
	var res = patt.toString();
	document.getElementById("demo").innerHTML=res;
}
