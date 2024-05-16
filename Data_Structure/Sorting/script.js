////Bubble Sort

const bubble = function (arr) {
  for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }
};

// bubble(numbers);
// console.log(numbers);

//Selection Sort////
const selectionSort = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    let small = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[small]) {
        small = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[small];
    arr[small] = temp;
  }
};

// selectionSort(numbers);
// console.log(numbers);

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

////Insertion Sort////
const insertionSort = function (arr) {
  for (let i = 1; i < arr.length; i++) {
    let num = arr[i];
    let sort = i - 1;
    while (sort >= 0 && arr[sort] > num) {
      arr[sort + 1] = arr[sort];
      sort--;
    }
    arr[sort + 1] = num;
  }
};
insertionSort(numbers);
console.log(numbers);
