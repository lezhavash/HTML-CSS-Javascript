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

const flight = "LSWS23";
const jonas = {
  name: "Jonas Sehesvs",
  pasport: 343234542,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LES342";
  passenger.name = "Mr " + passenger.name;
  if (passenger.pasport === 343234542) {
    console.log("CheckIN");
  } else {
    console.log("No");
  }
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);
