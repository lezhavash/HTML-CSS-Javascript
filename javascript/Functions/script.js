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

// const lufthansa = {
//   airline: "Lufthansa",
//   iataCode: "LH",
//   bookings: [],
//   // book: function() {}
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(239, "Jonas Schmedtmann");
// lufthansa.book(635, "John Smith");

// const book = lufthansa.book;

// const eurowings = {
//   airline: "Eurowings",
//   iataCode: "EW",
//   bookings: [],
//   book,
// };

// eurowings.book(233, "Shota Lezhava");

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

// lufthansa.planes = 300;
// lufthansa.buyPlans = function () {
//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector(".buy")
//   .addEventListener("click", lufthansa.buyPlans.bind(lufthansa));

// const poll = {
//   question: "What is your favourite programming language?",
//   options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const answer = Number(
//       prompt(
//         `${this.question} \n ${this.options.join(
//           "\n"
//         )} \n (Write optional Number)`
//       )
//     );

//     if (answer < this.answers.length) {
//       this.answers[answer]++;
//     }
//     this.displayResults("array");
//     this.displayResults("string");
//   },

//   displayResults(type) {
//     type === "string"
//       ? console.log(`Poll results are ${this.answers.join(", ")}`)
//       : console.log(this.answers);
//   },
// };

// document
//   .querySelector(".poll")
//   .addEventListener("click", poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({ answers: [5, 2, 3] });
// poll.displayResults.call({ answers: [5, 2, 3] }, "string");
/////

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passenger`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();

(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";
})();
