var Animal = function (name, move) {
	this.name = name;
	this.move = function () {
		console.log("moving");
	};
};

var Predator = function(name) {
	this.attack = function(animal) {
		console.log("I am hungry for" + animal.name);
	};
	Animal.call(this, name);
};
Predator.prototype = new Animal();

var cat = new Predator("Jerry");
var mouse = new Animal("Tom");
cat.move();
cat.attack(mouse);




var Shape = function(width, height) {
	this.width = width;
	this.height = height;
};

var Rectangle = function(width, height) {
	this.area = function(width, height) {
		console.log( this.width * this.height);
	};
	Shape.call(this, width, height);
	this.create = function() {
		var newEl = $('<div></div>');
		return newEl;
	};
};
Rectangle.prototype = new Shape();

var Circle = function(width) {
	this.area = function(width) {
		console.log( ((this.width/2)*(this.width/2))*Math.PI);
	};
	Shape.call(this, width);
	this.create = function() {
		var newEl = $('<div></div>');
		return newEl;
	};
};
Circle.prototype = new Shape();

var x = new Rectangle(10, 5);
var y = new Circle(8);
x.area();
y.area();








var Flower = function(color) {
	this.color = color;
	this.pollinated = false;
};

var Bee = function() {
	Bee.prototype.buzz = function(){
		console.log("buzzzz");
	};
	Bee.prototype.pollinate = function(flower){
			flower.pollinated=true;
	};
};



var bee1 = new Bee();
var flower1 = new Flower("Orange", false);
bee1.pollinate(flower1);

















