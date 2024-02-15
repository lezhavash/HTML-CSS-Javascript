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

const delphineScore1 = 100;
const delphineScore2 = 100;
const delphineScore3 = 100;
const delphineAverage = (delphineScore1 + delphineScore2 + delphineScore3) / 3;

const koalaScore1 = 100;
const koalaScore2 = 100;
const koalaScore3 = 100;
const koalaAverage = (koalaScore1 + koalaScore2 + koalaScore3) / 3;

if (delphineAverage >= 100 || koalaAverage >= 100) {
  if (delphineAverage > koalaAverage) {
    console.log(`Delphine team winnes`);
  } else if (delphineAverage < koalaAverage) {
    console.log(`Koala team winnes`);
  } else if (
    delphineAverage === koalaAverage &&
    delphineAverage >= 100 &&
    koalaAverage >= 100
  ) {
    console.log(`Both winn s`);
  }
} else {
  console.log(`Nowan winns`);
}
