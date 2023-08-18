// Say Hello every 3 seconds
function example4(){
	myVar=setInterval(function(){alert("Hello")},3000);
}

function myStopFunction(){
	clearInterval(myVar);
}

// Digital clock
function example5(){
	myVar=setInterval(function(){myTimer()},1000);
	
	function myTimer(){
		var d=new Date();
		var t=d.toLocaleTimeString();
		document.getElementById("demo").innerHTML=t;
	}
}

function myStopFunction()
{
	clearTimeout(myVar);
}

function example6(){
	setTimeout(function(){alert("Hello")},3000);
}