// it contains
// ["sumit", "amit", "anil", "anish"]
var set1 = new Set(["sumit", "sumit", "amit", "anil", "anish"]);

// it contains 'f', 'o', 'd'
var set2 = new Set("fooooooood");

// it contains [10, 20, 30, 40]
var set3 = new Set([10, 20, 30, 30, 40, 40]);

// it is an empty set
var set4 = new Set();

set4.add(10);
set4.add(20);

// As this method returns
// the set object hence chaining
// of add method can be done.
set4.add(30).add(40).add(50);
console.log(set1);
console.log(set2);
console.log(set3);
console.log(set4);

