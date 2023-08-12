##
Decorator is a structural pattern that allows adding new behaviors to objects dynamically by placing them inside special wrapper objects, called decorators.

Using decorators you can wrap objects countless number of times since both target objects and decorators follow the same interface. The resulting object will get a stacking behavior of all wrappers.

##
Usage examples: The Decorator is pretty standard in TypeScript code, especially in code related to streams.

Identification: Decorator can be recognized by creation methods or constructors that accept objects of the same class or interface as a current class.

Conceptual Example

This example illustrates the structure of the Decorator design pattern and focuses on the following questions:

What classes does it consist of?
What roles do these classes play?
In what way the elements of the pattern are related?