##
Flyweight is a structural design pattern that allows programs to support vast quantities of objects by keeping their memory consumption low.

The pattern achieves it by sharing parts of object state between multiple objects. In other words, the Flyweight saves RAM by caching the same data used by different objects.


##
Usage examples: The Flyweight pattern has a single purpose: minimizing memory intake. If your program doesn’t struggle with a shortage of RAM, then you might just ignore this pattern for a while.

Identification: Flyweight can be recognized by a creation method that returns cached objects instead of creating new.

Conceptual Example

This example illustrates the structure of the Flyweight design pattern and focuses on the following questions:

What classes does it consist of?
What roles do these classes play?
In what way the elements of the pattern are related?