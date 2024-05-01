/// Reverce String

// function reverse(str) {
//   newstr = [];
//   for (let i = str.length - 1; i >= 0; i--) {
//     newstr.push(str[i]);
//   }
//   return newstr.join("");
// }

// console.log(reverse("shota magari kacia"));

///Merge Sorted Arrays

const mergeSortedArrays = function (arr1, arr2) {
  const margeArrray = [];
  arr1.forEach((element) => {
    margeArrray.push(element);
  });
  arr2.forEach((element) => {
    margeArrray.push(element);
  });
  sortArray(margeArrray);
  console.log(margeArrray);
};

const sortArray = function (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let x = arr[i];
        arr[i] = arr[j];
        arr[j] = x;
      }
    }
  }
};

let arr1 = [1, 5, 63, 21];
let arr2 = [6, 4, 8, 5];

mergeSortedArrays(arr1, arr2);
