

var Car = function (model, noise) {
	this.model = model;
	this.noise = noise;
	this.wheels = 4;

};


Car.prototype.makenoise = function () {
	console.log(this.noise);
	console.log(this);
};

var BMW = new Car ("GROSSE BAGNOLE","VROOM");

BMW.makenoise();

setTimeout(BMW.makenoise, 1000);