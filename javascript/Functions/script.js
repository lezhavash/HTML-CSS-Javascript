"use strict";

// const bookings = [];

// const createBooking = function (flightNum, numPassengers = 1, price = 199) {
//   // numPassengers ||= 1;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };

//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking("ESD123");

//////

// const flight = "LSWS23";
// const jonas = {
//   name: "Jonas Sehesvs",
//   pasport: 343234542,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = "LES342";
//   passenger.name = "Mr " + passenger.name;
//   if (passenger.pasport === 343234542) {
//     console.log("CheckIN");
//   } else {
//     console.log("No");
//   }
// };

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

////////

// const oneword = function (str) {
//   return str.replaceAll(" ", "").toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(" ");
//   return [first.toUpperCase(), ...others].join(" ");
// };

// const transform = function (str, fn) {
//   console.log(`Original string : ${str}`);
//   console.log(`Transform string: ${fn(str)}`);
// };

// transform("Javascript is the best", upperFirstWord);
// transform("Javascript is the best", oneword);

///////

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet("Hey");
// greeterHey("Shota");

///////

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, "Jonas Schmedtmann");
lufthansa.book(635, "John Smith");

const book = lufthansa.book;

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
  book,
};

eurowings.book(233, "Shota Lezhava");

// book.call(eurowings, 23, "Sarah Williams");
// console.log(eurowings);

// book.call(lufthansa, 239, "Mary Cooper");
// console.log(lufthansa);

// const swiss = {
//   airline: "Swiss Air Lines",
//   iataCode: "LX",
//   bookings: [],
// };

// book.call(swiss, 583, "Mary Cooper");

// // Apply method
// const flightData = [583, "George Cooper"];
// book.apply(swiss, flightData);
// console.log(swiss);

// book.call(swiss, ...flightData);

lufthansa.planes = 300;
lufthansa.buyPlans = function () {
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlans.bind(lufthansa));
