/// Reverce String////

// function reverse(str) {
//   newstr = [];
//   for (let i = str.length - 1; i >= 0; i--) {
//     newstr.push(str[i]);
//   }
//   return newstr.join("");
// }

// console.log(reverse("shota magari kacia"));

////Merge Sorted Arrays/////

// const mergeSortedArrays = function (arr1, arr2) {
//   const margeArrray = [];
//   arr1.forEach((element) => {
//     margeArrray.push(element);
//   });
//   arr2.forEach((element) => {
//     margeArrray.push(element);
//   });
//   sortArray(margeArrray);
//   console.log(margeArrray);
// };

// const sortArray = function (arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] > arr[j]) {
//         let x = arr[i];
//         arr[i] = arr[j];
//         arr[j] = x;
//       }
//     }
//   }
// };

// let arr1 = [1, 5, 63, 21];
// let arr2 = [6, 4, 8, 5];

// mergeSortedArrays(arr1, arr2);

/////Create HeshTable/////

// class HeshTable {
//   constructor(size) {
//     this.data = new Array(size);
//   }

//   _hash(key) {
//     let hash = 0;
//     for (let i = 0; i < key.length; i++) {
//       hash = (hash + key.charCodeAt(i) * i) % this.data.length;
//     }
//     return hash;
//   }

//   set(key, value) {
//     let addres = this._hash(key);
//     if (!this.data[addres]) {
//       this.data[addres] = [];
//       this.data[addres].push([key, value]);
//       console.log(this.data);
//     } else {
//       this.data[addres].push([key, value]);
//     }
//     return this.data;
//   }

//   get(key) {
//     let addres = this._hash(key);
//     const currentBuket = this.data[addres];
//     if (currentBuket) {
//       for (let i = 0; i < currentBuket.length; i++) {
//         if (currentBuket[i][0] === key) {
//           return currentBuket[i][1];
//         }
//       }
//     }
//     return undefined;
//   }
// }

// const myHeshTable = new HeshTable(50);
// myHeshTable.set("grapes", 1000);
// let x = myHeshTable.get("grapes");
// console.log(x);

////repetitive ////

// const repetitive = function (arr) {
//   let x = [];

//   for (let i = 0; i <= arr.length - 1; i++) {
//     for (let j = i + 1; j <= arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         x.push([arr[i], j]);
//       }
//     }
//   }

//   if (!x) return undefined;
//   if (x.length === 1) {
//     return x[0][0];
//   }
//   let small = x[0];
//   for (let i = 0; i < x.length - 1; i++) {
//     if (x[i][1] > x[i + 1][1]) {
//       small = x[i + 1];
//       return small[0];
//     }
//   }
// };

// function findFirstRepetitiveNumber(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < i; j++) {
//       if (arr[j] === arr[i]) {
//         return arr[j];
//       }
//     }
//   }
//   return null;
// }

// const numbers = [2, 3, 5, 5, 2, 43, 7, 5, 2, 2, 5];
// const firstRepetitive = findFirstRepetitiveNumber(numbers);
// console.log(firstRepetitive);

// const repetitive2 = function (arr) {
//   let map = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (map[arr[i]] !== undefined) {
//       return arr[i];
//     } else {
//       map[arr[i]] = i;
//     }
//   }

//   return undefined;
// };
// let y = repetitive2([2, 5, 5, 2, 3, 5, 1, 2, 4]);
// console.log(y);

////Link Lists////

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor(value) {
//     this.head = {
//       value: value,
//       next: null,
//     };
//     this.tail = this.head;
//     this.length = 1;
//   }

//   append(value) {
//     const newNode = new Node(value);
//     this.tail.next = newNode;
//     this.tail = newNode;
//     this.length++;
//     return this;
//   }

//   prepend(value) {
//     const newNode = new Node(value);
//     newNode.next = this.head;
//     this.head = newNode;
//     this.length++;
//   }

//   insert(index, value) {
//     if (index >= this.length) {
//       return this.append(value);
//     }

//     const newNode = new Node(value);
//     const previous = this.treverseToInder(index - 1);
//     const next = previous.next;
//     newNode.next = next;
//     previous.next = newNode;
//     this.length++;
//   }

//   treverseToInder(index) {
//     let counter = 0;
//     let curentNode = this.head;
//     while (counter !== index) {
//       curentNode = curentNode.next;
//       counter++;
//     }
//     return curentNode;
//   }

//   remove(index) {
//     const previous = this.treverseToInder(index - 1);
//     const current = previous.next;
//     previous.next = current.next;
//     this.length--;
//   }

//   lookup(index) {
//     console.log(this.treverseToInder(index).value);
//   }

//   reverse() {
//     if (!this.head.next) {
//       return this.head;
//     }
//     let first = this.head;
//     this.tail = this.head;
//     let second = first.next;

//     while (second) {
//       const temp = second.next;
//       second.next = first;
//       first = second;
//       second = temp;
//     }
//     this.head.next = null;
//     this.head = first;
//   }

//   reverse2() {
//     if (!this.head.next) {
//       return this.head;
//     }
//     let prev = null;
//     let curr = this.head;
//     while (curr) {
//       let next = curr.next;
//       curr.next = prev;
//       prev = curr;
//       curr = next;
//     }
//     this.head = prev;
//   }

//   printList() {
//     const array = [];
//     let currentNode = this.head;
//     while (currentNode !== null) {
//       array.push(currentNode.value);
//       currentNode = currentNode.next;
//     }
//     return array;
//   }
// }

// const myLinkedList = new LinkedList(10);
// myLinkedList.append(5);
// myLinkedList.append(16);
// myLinkedList.append(12);
// myLinkedList.prepend(1);
// myLinkedList.insert(2, 99);
// myLinkedList.remove(2);
// myLinkedList.reverse2();

// console.log(myLinkedList);

////Doubly Link List

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//     this.prev = null;
//   }
// }

// class DoublyLinkedList {
//   constructor(value) {
//     this.head = {
//       value: value,
//       next: null,
//       prev: null,
//     };
//     this.tail = this.head;
//     this.length = 1;
//   }

//   append(value) {
//     const newNode = new Node(value);
//     newNode.prev = this.tail;
//     this.tail.next = newNode;
//     this.tail = newNode;
//     this.length++;
//     return this;
//   }

//   prepend(value) {
//     const newNode = new Node(value);
//     this.head.prev = newNode;
//     newNode.next = this.head;
//     this.head = newNode;
//     this.length++;
//   }

//   insert(index, value) {
//     if (index >= this.length) {
//       return this.append(value);
//     }

//     const newNode = new Node(value);
//     const previous = this.treverseToInder(index - 1);
//     newNode.prev = previous;
//     const next = previous.next;
//     newNode.next = next;
//     previous.next = newNode;
//     next.prev = newNode;
//     this.length++;
//   }

//   treverseToInder(index) {
//     let counter = 0;
//     let curentNode = this.head;
//     while (counter !== index) {
//       curentNode = curentNode.next;
//       counter++;
//     }
//     return curentNode;
//   }

//   remove(index) {
//     const previous = this.treverseToInder(index - 1);
//     const unvonted = previous.next;
//     previous.next = unvonted.next;
//     previous.next.prev = previous;
//     this.length--;
//   }

//   lookup(index) {
//     console.log(this.treverseToInder(index).value);
//   }
// }

// const myDoublyLinkedList = new DoublyLinkedList(10);
// myDoublyLinkedList.append(5);
// myDoublyLinkedList.append(16);
// myDoublyLinkedList.prepend(1);
// myDoublyLinkedList.insert(2, 99);
// myDoublyLinkedList.remove(3);
// myDoublyLinkedList.lookup(3);
// console.log(myDoublyLinkedList);

////Stacks////
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Stack {
//   constructor() {
//     this.top = null;
//     this.bottom = null;
//     this.length = 0;
//   }
//   peek() {
//     console.log(this.top.value);
//   }
//   push(value) {
//     const newNode = new Node(value);
//     if (this.length === 0) {
//       this.top = newNode;
//       this.bottom = newNode;
//     } else {
//       const temp = this.top;
//       this.top = newNode;
//       newNode.next = temp;
//     }
//     this.length++;
//   }
//   pop() {
//     const temp = this.top;
//     this.top = this.top.next;
//     this.length--;
//     console.log(`I removed ${temp.value}`);
//   }
// }

// const myStack = new Stack();
// myStack.push(5);
// myStack.push(6);
// myStack.push(7);
// myStack.peek();
// myStack.pop();

// console.log(myStack);

////Queue///

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    console.log(this.first.value);
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
  }
  dequeue() {
    const temp = this.first;
    this.first = this.first.next;
    this.length--;
    return temp;
  }
}

const myQueue = new Queue();
myQueue.enqueue(10);
myQueue.enqueue(4);
myQueue.enqueue(8);
myQueue.peek();
myQueue.dequeue();
console.log(myQueue);
