// classes
function example1(){
	function Person(gender) {			// new class called Person
		this.gender = gender;			// property called gender
		console.log('Person is instantiated');
	}	
	Person.prototype = {
		sayHello:	function() {return 'hello';},
		sayGender:	function() {return this.gender;}
	};
	// start using classes
	
	var person1 = new Person('Male');		// creates two instances
	var person2 = new Person('Female');		// person1 and person2
	var genderTeller = person1.sayGender;	// genderTeller points to
											// sayGender
	
	console.log('person1 is a ' + person1.gender);	// Male
	console.log(person1.sayHello());		// person1 calls sayHello
	console.log(person1.sayGender());		// logs 'Male'
	console.log(genderTeller === person1.sayGender);  // true
	console.log(genderTeller === Person.prototype.sayGender); //true
	console.log(genderTeller.call(person1));	// logs 'Male'
}

// Inheritance
function example2(){
	// define Person class
	function Person() {}
	Person.prototype = {
		walk:		function() 	{console.log('I am walking!');},
		sayHello:	function() 	{console.log('hello');}
	};
	
	// define Student class
	function Student(){	
		Person.call(this); 	//  Call the parent constructor
	}
	
	// inherit Person
	Student.prototype = new Person();
	
	// constructor originally points to Person, change to Student
	Student.prototype.constructor = Student;
	
	// replace the sayHello method
	Student.prototype.sayHello = function(){
		console.log('hi, I am a student');
	}
	
	// Add sayGoodbye method
	Student.prototype.sayGoodBye = function() {
		console.log('goodBye');
	}
	
	// Encapsulation
	var student1 = new Student();
	student1.sayHello();		// Students inherits sayHello and
								// changes it

	student1.walk();			// Student inherits walk but only
								// does not need to change it
	student1.sayGoodBye();		
	
	// check inheritance
	console.log(student1 instanceof Person);	// true
	console.log(student1 instanceof Student);	// true
	
	// Using Object.create
	Student.prototype = Object.create(Person.prototype);
}

// Abstraction
function example3(){
	// Abstraction is achieved with specialization by inheritance
	// and composition by letting instances of classes be the values
	// of attributes of other objects.
	// Function class inherits from the Object class(specialization)
	// Function.prototype property is an instance of Object(composition)

	var foo = function(){};
	console.log('foo is a Function: ' + (foo instanceof Function));
	console.log('foo.prototype is an Object: ' + (foo.prototype instanceof Object));
}
