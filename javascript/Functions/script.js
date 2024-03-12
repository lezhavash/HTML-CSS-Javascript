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

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet("Hey");
greeterHey("Shota");
