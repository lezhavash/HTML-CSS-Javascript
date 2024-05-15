// let counter = 0;
// function inception() {
//   if (counter > 3) {
//     return "done";
//   }
//   counter++;
//   return inception();
// }

// inception();

////Factorial////
// const findFactorialRecursive = function (number) {
//   if (number === 2) {
//     return 2;
//   }
//   return number * findFactorialRecursive(number - 1);
// };

// const findFactorialIterative = function (number) {
//   let fact = 1;
//   for (let i = 2; i <= number; i++) {
//     fact *= i;
//   }
//   console.log(fact);
//   return fact;
// };
// const x = findFactorialRecursive(10);
// console.log(x);

// findFactorialIterative(10);

////Fibonacci////

const fibonacciIterative = function (n) {
  let fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib.push(fib[i - 2] + fib[i - 1]);
  }
  return fib[n];
};

const x = fibonacciIterative(4);
console.log(x);

const fibonacciIterativeRecurive = function (n) {
  if (n < 2) {
    return n;
  }
  return fibonacciIterativeRecurive(n - 1) + fibonacciIterativeRecurive(n - 2);
};

const y = fibonacciIterativeRecurive(4);
console.log(y);
