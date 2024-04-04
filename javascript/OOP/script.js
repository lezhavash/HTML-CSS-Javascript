"use strict";

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  console.log((this.speed += 10));
};

Car.prototype.brake = function () {
  console.log((this.speed -= 5));
};

const car1 = new Car("BMW", 120);
car1.accelerate();
car1.brake();
car1.brake();
car1.brake();
car1.accelerate();
