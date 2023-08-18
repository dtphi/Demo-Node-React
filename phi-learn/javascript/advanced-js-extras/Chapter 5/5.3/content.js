<!--#################################################
Node properties
-------------------
NodeList childNodes[] - contains the child nodes of the current node
Node fistChild - first child of this node, or null if has no children
Node lastChild - last child of this node, or null if has no children
Node nextSibling - sibling node that immediately follows this one in the childNodes[] of the parentNode, or null if no node
Node parentNode - the parent node of this node, or null if no parent
Node previousSibling - sibling node that immediately precedes this one in the childNodes[] array, or null if no node

Node Methods
-----------------
Node appendChild(Node newChild) -  adds newChild to the document, inserting it as the last child of this node
Node cloneNode(boolean deep) - makes and returns a copy of the node on which it is called
boolean hasChildNodes() - returns true if this node has one or more children and false if it has none
Node insertBefore(Node newChild, Node refChild) - inserts te node newChild into the tree as a child of this node
and then returns the inserted node
Node removeChild(Node oldChild) - removes oldChild from the childNodes[] of this node
Node replaceChild(Node newChild, Node oldChild) - replaces oldChild with newChild and return oldChild. oldChild must
be a child of this node.

NodeList properties
---------------------
length - number of nodes in the NodeList

NodeList Methods
--------------------
Node item(unsigned long index) - returns the Node at the specified index or null if the index is out of bounds.
########################################################-->
