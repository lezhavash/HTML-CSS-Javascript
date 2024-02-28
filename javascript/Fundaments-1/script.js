`use strict`;

// let marksWeightData1 = 78;
// let marksTallData1 = 1.69;
// let johnWeightData1 = 92;
// let johnTallData1 = 1.95;

// let marksBMIData1 = marksWeightData1 / marksTallData1 ** 2;
// let johnBMIData1 = johnWeightData1 / johnTallData1 ** 2;

// let marksWeightData2 = 95;
// let marksTallData2 = 1.88;
// let johnWeightData2 = 85;
// let johnTallData2 = 1.76;

// let marksBMIData2 = marksWeightData2 / marksTallData2 ** 2;
// let johnBMIData2 = johnWeightData2 / johnTallData2 ** 2;

// if (marksBMIData1 > johnBMIData1) {
//   console.log(`Marks ${marksBMIData1} is more then johns`);
// } else {
//   console.log(`johns ${johnBMIData1} is more then marks`);
// }

// const delphineScore1 = 100;
// const delphineScore2 = 100;
// const delphineScore3 = 100;
// const delphineAverage = (delphineScore1 + delphineScore2 + delphineScore3) / 3;

// const koalaScore1 = 100;
// const koalaScore2 = 100;
// const koalaScore3 = 100;
// const koalaAverage = (koalaScore1 + koalaScore2 + koalaScore3) / 3;

// if (delphineAverage >= 100 || koalaAverage >= 100) {
//   if (delphineAverage > koalaAverage) {
//     console.log(`Delphine team winnes`);
//   } else if (delphineAverage < koalaAverage) {
//     console.log(`Koala team winnes`);
//   } else if (
//     delphineAverage === koalaAverage &&
//     delphineAverage >= 100 &&
//     koalaAverage >= 100
//   ) {
//     console.log(`Both winn s`);
//   }
// } else {
//   console.log(`Nowan winns`);
// }

// let height;
// console.log(typeof height);

// let bill = 430;
// let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// console.log(`The bill was ${bill}, the tip ${tip}, and total ${bill + tip}`);

// let calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// let delphineAverage = calcAverage(20, 20, 20);
// let koalaAverage = calcAverage(30, 30, 30);

// function checkWinner(delphineAverage, koalaAverage) {
//   if (
//     delphineAverage / 2 >= koalaAverage ||
//     koalaAverage / 2 >= delphineAverage
//   ) {
//     if (delphineAverage > koalaAverage) {
//       console.log(`Delphines win`);
//     } else if (koalaAverage > delphineAverage) {
//       console.log(`Koalas win`);
//     }
//   } else {
//     console.log(`Loose `);
//   }
// }

// checkWinner(delphineAverage, koalaAverage);

// let bills = [125, 555, 44];
// let calcTip = function (bill) {
//   if (bill >= 50 && bill <= 300) {
//     return bill * 0.15;
//   } else {
//     return bill * 0.2;
//   }
// };

// let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);

// let total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(total);

// let mark = {
//   fullName: "Mark Miller",
//   mass: 79,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// let john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// if (mark.calcBMI() > john.calcBMI()) {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.bmi}) is higher then ${john.fullName}'s  (${john.bmi}) `
//   );
// } else {
//   console.log(
//     `${john.fullName}'s BMI (${john.bmi}) is higher then ${mark.fullName}'s  (${mark.bmi}) `
//   );
// }

// let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// let tips = [];
// let total = [];
// let calcTip = function (bill) {
//   if (bill >= 50 && bill <= 300) {
//     tips.push(bill * 0.15);
//   } else {
//     tips.push(bill * 0.2);
//   }
// };

// for (let i = 0; i < bills.length; i++) {
//   calcTip(bills[i]);
//   total[i] = bills[i] + tips[i];
// }

// console.log(bills, tips, total);

// let calcAverage = function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum / arr.length;
// };

// console.log(calcAverage(total));

let temp = [17, 21, 13];
let printForecast = function (temp) {
  let text = "";
  for (let i = 0; i < temp.length; i++) {
    text += `${temp[i]}C  in day ${i + 1} ...`;
  }
  console.log("... " + text);
};

printForecast(temp);
