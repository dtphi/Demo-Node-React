<!--DOM Root Nodes
<!--2 special properties to allow access to the full document-->
document.documentElement - The full document
document.body - The body of the document

<p>Hello World!</p>
<div>
<p>The DOM is useful!</p>
</div>
<script>
alert(document.body.innerHTML);
</script>

<!--Creating new nodes-->
<div id="div1">
<p id="p1">This is a paragraph.</p>
<p id="p2">This is another paragraph.</p>
</div>
<script>
	var para=document.createElement("p");				// creates new <p> element
	var node=document.createTextNode("This is new."); 	// add text to <p> element, create a textNode first
	para.appendChild(node);								// append the text node to the <p> element
	var element=document.getElementById("div1");		// find an existing element
	element.appendChild(para);							// append the new element to an existing element
</script>

<!--Removing elements-->
<div id="div1">
<p id="p1">This is a paragraph.</p>
<p id="p2">This is another paragraph.</p>
</div>
<script>
	var parent=document.getElementById("div1");		// find element div1(parent)
	var child=document.getElementById("p1");		// find element p1(child)
	parent.removeChild(child);						// Remove the child from the parent
</script>

<script>
	var chidl=document.getElementById("p1");		// find the child
	child.parentNode.removeChild(child);			// user parentNode property to find the parent
</script>

<!--Node list-->
<p>Hello World!</p>
<p>The DOM is very useful!</p>
<script>
	x=document.getElementsByTagName("p");
	document.write(x[1].innerHTML);			// The DOM is very useful!, Note: index starts at 0
</script>

<!--Node list length-->
<p>Hello World!</p>
<p>The DOM is very useful!</p>
<script>
	x=document.getElementsByTagName("p");
	for (i=0;i<x.length;i++){
		document.write(x[i].innerHTML);
	}	
</script>
