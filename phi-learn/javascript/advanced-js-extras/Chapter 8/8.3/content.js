// history.back
function goBack(){
	window.history.back()
}
  
// load a new document
function newDoc(){
	window.location.assign("http://learntoprogram.tv")
}

//history.forward
function goForward(){
	window.history.forward()
}

// pop-up boxes
function example3(){
	alert("I am an alert box!");
	var r=confirm("Press a button");
	if (r==true){
		x="You pressed OK!";
	}
	else{
		x="You pressed Cancel!";
	}
	document.getElementById("demo").innerHTML=x;
	
	var x;
	var person=prompt("Please enter your name","Harry Potter");
	if (person!=null){
		x="Hello " + person + "! How are you today?";
		document.getElementById("demo").innerHTML=x;
	}
}