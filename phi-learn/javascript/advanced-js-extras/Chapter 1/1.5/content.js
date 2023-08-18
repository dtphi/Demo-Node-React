ep.html
<html>
<head>
<link href="style.css" rel="stylesheet" type="text/css">
<title>Event Propagation</title>
</head>
<body id="body">
	<div id="first div">1
		<div id="second div">2
			<div id="third div">3
			</div>
		</div>
	</div>
<script src="ep.js"></script>
</body>
</html>

///////////////
ep.js
////////////////////////////
//	PHASE 1: Capturing Phase
//	PHASE 2: At Target
//	PHASE 3: Bubbling Phase
//  Note: The event model was standardized by the W3C in DOM Level 2.
////////////////////////////
var eventHandler = function (event){
	console.log("event.bubbles: " + event.bubbles);
	console.log("event.target: " + event.target.id);
	console.log("event.currentTarget: " + event.currentTarget.id);
	console.log("event.eventPhase: " + event.eventPhase);
	console.log("event.type: " + event.type);
	console.log("--------------------");
};

var divList = document.getElementsByTagName('div');

// Bubbling third->second->first->body->document->window
/*document.body.addEventListener('click', eventHandler, false);
for(index = 0; index < divList.length; index++)
	divList[index].addEventListener('click',eventHandler, false);
*/

// Capturing window->document->body->first->second->third
document.body.addEventListener('click', eventHandler, true);
for(index = 0; index < divList.length; index++)
	divList[index].addEventListener('click',eventHandler, true);

/////////////////////////////
style.css
div {
	margin: auto;
}
body > div {
	width:500px;
	height:500px;
	background-color: blue;
}
body > div > div {
	width:400px;
	height:400px;
	background-color: yellow;
}
div > div > div {
	width:300px;
	height:300px;
	background-color: pink;
}