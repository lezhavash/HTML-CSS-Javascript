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

const car2 = new Car("BMW", 120);
car2.accelerate();
car2.brake();
car2.brake();
car2.brake();
car2.accelerate();

const Ev = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

Ev.prototype = Object.create(Car.prototype);
Ev.prototype.constructor = Ev;

Ev.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

Ev.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(this.speed, this.charge);
};

const tesla = new Ev("tesla", 120, 23);
tesla.brake();
tesla.chargeBattery(90);
tesla.accelerate();

///////////////// ES6
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    console.log((this.speed += 10));
  }

  brake() {
    console.log((this.speed -= 5));
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}
const car1 = new CarCl("BMW", 120);
car1.accelerate();
car1.brake();
car1.brake();
car1.brake();
car1.accelerate();
console.log(car1.speedUS);
car1.speedUS = 200;
console.log(car1);

class Ev2 extends Car {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery = function (chargeTo) {
    this.#charge = chargeTo;
  };

  accelerate = function () {
    this.speed += 20;
    this.#charge--;
    console.log(this.speed, this.#charge);
  };
}

const tesla1 = new Ev("tesla", 120, 23);
tesla1.brake();
tesla1.chargeBattery(90);
tesla1.accelerate();

///////Object Creation

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birrhYear);
//   },

//   init(firstname, birthYear) {
//     this.firstname = firstname;
//     this.birrhYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = "Steven";
// steven.birrhYear = 2002;
// steven.calcAge();

// const serah = Object.create(PersonProto);
// serah.init("Sarah", 1979);
// serah.calcAge();
