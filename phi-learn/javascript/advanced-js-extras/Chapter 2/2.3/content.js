// Get and Set
function example4(){
	var circle = {
		x: 1.0,
		y:1.0,
		r:1.0,
		get area() {return Math.PI * this.r * this.r;},
		set radius(newvalue) {
			this.r = newvalue;
		}
	};
	console.log(circle.area);
	circle.radius = 2.0;
	console.log(circle.area);
}
