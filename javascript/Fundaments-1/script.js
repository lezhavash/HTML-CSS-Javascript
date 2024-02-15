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

let calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

let delphineAverage = calcAverage(20, 20, 20);
let koalaAverage = calcAverage(30, 30, 30);

function checkWinner(delphineAverage, koalaAverage) {
  if (
    delphineAverage / 2 >= koalaAverage ||
    koalaAverage / 2 >= delphineAverage
  ) {
    if (delphineAverage > koalaAverage) {
      console.log(`Delphines win`);
    } else if (koalaAverage > delphineAverage) {
      console.log(`Koalas win`);
    }
  } else {
    console.log(`Loose `);
  }
}

checkWinner(delphineAverage, koalaAverage);
