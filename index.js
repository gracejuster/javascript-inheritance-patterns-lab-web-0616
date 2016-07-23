// 1. Define a Point object that is constructed with an x,y coordinate pair to indicate its position. 
function Point(x, y) {
  this.x = x;
  this.y = y;
}
// Add a toString function to the Point prototype to return the location in (x, y) format.
Point.prototype.toString = function() {
  return (this.x + ", " + this.y);
}

// 2. Define a Shape object. 
function Shape() {}

// It should have an addToPlane function that takes two integers, x and y, as arguments. 
Shape.prototype.addToPlane = function(x,y){
  // This function should assign a Point to the Shape's position property based on these arguments. 
  this.position = new Point(x,y);
}

// Shape should also define a move function that takes an x,y pair of arguments and moves the position to a new Point. 
Shape.prototype.move = function(x,y) {
  this.position = new Point(x,y);
}

//3.Define a Circle object  
function Circle(radius){
  //that inherits from Shape
  Shape.call(this) //shape doesnt take any arguments so just need this
  //and is constructed with an integer argument that sets the radius property.
  this.radius = radius
}
//use object create to give shape's prototypes
Circle.prototype = Object.create(Shape.prototype)
//build a constructor out 
Circle.prototype.constructor = Circle

//Define and implement functions on Circle 
//calculate area() 
Circle.prototype.area = function() {
  return(Math.PI * this.radius^2)
}

//and circumference() based on the radius.
Circle.prototype.diameter = function() {
  return(this.radius*2);
}
Circle.prototype.circumference = function() {
  return(2 * Math.PI * this.radius);
}

//side objects 
function Side(length){
  this.length = length 
}

//4.Define a Polygon object 
//It should be constructe with an array of Side objects that have a length property. 
function Polygon(sides) {
  //that inherits from Shape
  Shape.call(this)
  this.sides = sides
}

//use object create to give shape's prototypes
Polygon.prototype = Object.create(Shape.prototype)
//build a constructor out 
Polygon.prototype.constructor = Polygon

//Implement a function called perimeter() that calculates the perimeter of any Polygon based on the lengths of the sides. 
Polygon.prototype.perimeter = function() {
  var perimeter = 0
  for(var i=0;i< this.sides.length; i++) {
    perimeter += this.sides[i].length
  }
  return(perimeter)
}

//Implement a function called numberOfSides() that returns the number of sides.
Polygon.prototype.numberOfSides = function() {
  return(this.sides.length)
}

//Define a Quadrilateral 
function Quadrilateral(lengthOne, lengthTwo, lengthThree, lengthFour) {
  // inherits from Polygon 
  Polygon.call(this, [new Side(lengthOne), new Side(lengthTwo), new Side(lengthThree), new Side(lengthFour)])
  //and is constructed with four integer arguments representing the side lengths.
  this.lengthOne = lengthOne
  this.lengthTwo = lengthTwo
  this.lengthThree = lengthThree
  this.lengthFour = lengthFour
}
Quadrilateral.prototype = Object.create(Polygon.prototype)
//build a constructor out 
Quadrilateral.prototype.constructor = Quadrilateral

//same for triangle
function Triangle(lengthOne, lengthTwo, lengthThree) {
  // inherits from Polygon 
  Polygon.call(this, [new Side(lengthOne), new Side(lengthTwo), new Side(lengthThree)])
  //and is constructed with four integer arguments representing the side lengths.
  this.lengthOne = lengthOne
  this.lengthTwo = lengthTwo
  this.lengthThree = lengthThree
}
Triangle.prototype = Object.create(Polygon.prototype)
//build a constructor out 
Triangle.prototype.constructor = Triangle 

//Define a Rectangle object that inherits from Quadrilateral 
function Rectangle(width, height) {
  Quadrilateral.call(this, width, width, height, height)
  //and is constructed with two integer arguments that set width and height properties. 
  this.width = width
  this.height = height 
}
// set Rectangle prototype to an instance of a Shape
Rectangle.prototype = Object.create(Quadrilateral.prototype);
// set Rectangle constructor
Rectangle.prototype.constructor = Rectangle

//Implement an area() function to calculate the area.
Rectangle.prototype.area = function() {
  return this.width * this.height;
}

// Define a Square object that inherits from Rectangle and is constructed 
// with a single integer argument that sets a length property. 

function Square(length) {
  Rectangle.call(this, length, length)
  this.length = length 
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square
// Define and implement a function for Square called listProperties() 
// that returns a string containing only the properties that belong to Square
Square.prototype.listProperties = function() {
  for (var prop in this) {
    if(this.hasOwnProperty(prop)) {
    console.log("Square" + prop + " = " + this[prop]);
  }
  }
}

