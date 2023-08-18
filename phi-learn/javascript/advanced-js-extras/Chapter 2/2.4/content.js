// Object methods and the JSON object
function example5(){
	// Object methods
	var s = {"x":1}.toString(); // string representation
	var c = {"y":2}.toLocaleString(); // localized str representation
	var p = {"z":3}.valueOf();//convert to other than string
	console.log(typeof s);
	console.log(typeof c);
	console.log(typeof p);
	
	var JSONObject = {
		"name":"John Johnson",
		"street":"Oslo West 555", 
		"age":33,
		"phone":"555 1234567"
	};
	console.log(JSONObject.name);
	console.log(JSONObject.age);
	
	var txt = '{"employees":[' +
		'{"firstName":"John","lastName":"Doe" },' +
		'{"firstName":"Anna","lastName":"Smith" },' +
		'{"firstName":"Peter","lastName":"Jones" }]}';
	
	obj = JSON.parse(txt);
	console.log(obj.employees[1].firstName);
	console.log(obj.employees[1].lastName);
	
	o = {x:1, y:{z:[false,null,"-"]}}; //define an object
	s = JSON.stringify(o); // s is '{"x":1,"y":{"z":[false,null,"-"]}}'
	p = JSON.parse(s); // p is a deep copy of o
	console.log(p["x"]);
	console.log(p["y"]["z"][0]);
	console.log(p["y"]["z"][1]);
	console.log(p["y"]["z"][2]);
}
