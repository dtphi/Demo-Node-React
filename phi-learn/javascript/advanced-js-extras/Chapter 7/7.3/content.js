// parsing a number
function example7(){
	var parse_number = /^-?\d+(?:\.\d*)?(?:e[+\-]?\d+)?$/i;
	// /^ ... $/i - tells if string contails only a number
	// -? - optional - sign
	// \d+ - it matches a one or more digit
	// (?:\.\d*)? - decimal point followed by zero or more digits
	// (?:e[+\-]?\d+)? - matches e|E, optional sign, one or more digits
	var test = function(num){
		console.log(parse_number.test(num));
	}
	test('1');				// true
	test('number');			// false
	test('98.6');			// true
	test('132.21.86.100');	// false
	test('123.45E-67');		// true
	test('123.45D-67');		// false
}

// parsing a url
function example8(){
	// ^ - beginning of the string
	// (?:([A-Za-z]+):)? - (optional) scheme name followed by :
	// (\/{0,3}) - / will be matched 0,1,2,3 times
	// ([0-9.\-A-Za-z]+) - matches a hostname, with digits, letters, . , -
	// (?::(\d+))? - (optional) matches a port number
	// (?:\/[^?#]*))? - (optional) all characters except ?,#
	// (?:\?([^#]*))? - (optional) one or more characters that are not #
	// (?:#(.*))? - (optional) begin with #, will match any character except line-ending character
	// $ - end of the string
	var parse_url = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
	var url = "http://learntoprogram.tv:80/course?q#javascript";
	var result = parse_url.exec(url);
	var names = ['url','scheme','slash','host','port','path','query','hash'];
	for(var i=0; i < names.length; i += 1){
		console.log(names[i] + ':\t' + result[i]);
	}
}