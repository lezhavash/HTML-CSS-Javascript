let marksWeightData1 = 78;
let marksTallData1 = 1.69;
let johnWeightData1 = 92;
let johnTallData1 = 1.95;

let marksBMIData1 = marksWeightData1 / marksTallData1 ** 2;
let johnBMIData1 = johnWeightData1 / johnTallData1 ** 2;
let markHigherBMIData1 = marksBMIData1 > johnBMIData1;

let marksWeightData2 = 95;
let marksTallData2 = 1.88;
let johnWeightData2 = 85;
let johnTallData2 = 1.76;

let marksBMIData2 = marksWeightData2 / marksTallData2 ** 2;
let johnBMIData2 = johnWeightData2 / johnTallData2 ** 2;
let markHigherBMIData2 = marksBMIData2 > johnBMIData2;

console.log(markHigherBMIData1);
console.log(markHigherBMIData2);
