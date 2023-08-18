function example1(){
	var w=window.innerWidth || document.documentElement.clientWidth
|| document.body.clientWidth;

	var h=window.innerHeight || document.documentElement.clientHeight
|| document.body.clientHeight;

	x=document.getElementById("demo");
	x.innerHTML="Browser inner window width: " + w + 
	", height: " + h + "."

	console.log("Available Width: " + screen.availWidth);
	console.log("Available Height: " + screen.availHeight);
	console.log(location.href);
	console.log(location.pathname);
}

// window.navigator
function example2(){
	txt = "<p>Browser CodeName: " + navigator.appCodeName + "</p>";
	txt+= "<p>Browser Name: " + navigator.appName + "</p>";
	txt+= "<p>Browser Version: " + navigator.appVersion + "</p>";
	txt+= "<p>Cookies Enabled: " + navigator.cookieEnabled + "</p>";
	txt+= "<p>Platform: " + navigator.platform + "</p>";
	txt+= "<p>User-agent header: " + navigator.userAgent + "</p>";
	txt+= "<p>User-agent language: " + navigator.systemLanguage + "</p>";
	document.getElementById("example").innerHTML=txt;
}