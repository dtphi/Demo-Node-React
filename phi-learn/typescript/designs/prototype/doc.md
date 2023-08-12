##
Prototype is a creational design pattern that allows cloning objects, even complex ones, without coupling to their specific classes.

All prototype classes should have a common interface that makes it possible to copy objects even if their concrete classes are unknown. Prototype objects can produce full copies since objects of the same class can access each other’s private fields.

##
Usage examples: The Prototype pattern is available in TypeScript out of the box with a JavaScript’s native Object.assign() method.

Identification: The prototype can be easily recognized by a clone or copy methods, etc.

Conceptual Example

This example illustrates the structure of the Prototype design pattern and focuses on the following questions:

What classes does it consist of?
What roles do these classes play?
In what way the elements of the pattern are related?