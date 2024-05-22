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

////Merge sort////

const margeSort = function (arr) {
  if (arr.length === 1) {
    return arr;
  }
  const length = arr.length;
  const middle = Math.floor(length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);
  return marge(margeSort(left), margeSort(right));
};

const marge = function (left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return result.concat(left.slice(leftIndex).concat(right.slice(rightIndex)));
};

// const answer = margeSort(numbers);
// console.log(answer);

function quickSort(array, left, right) {
  const len = array.length;
  let pivot;
  let partitionIndex;

  if (left < right) {
    pivot = right;
    partitionIndex = partition(array, pivot, left, right);

    //sort left and right
    quickSort(array, left, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, right);
  }
  return array;
}

function partition(array, pivot, left, right) {
  let pivotValue = array[pivot];
  let partitionIndex = left;

  for (let i = left; i < right; i++) {
    if (array[i] < pivotValue) {
      swap(array, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(array, right, partitionIndex);
  return partitionIndex;
}

function swap(array, firstIndex, secondIndex) {
  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}

//Select first and last index as 2nd and 3rd parameters
// quickSort(numbers, 0, numbers.length - 1);
// console.log(numbers);
