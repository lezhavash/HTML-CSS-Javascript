"use strict";

// const checkDogs = function (arr1, arr2) {
//   arr1 = julia.slice(1, -1);
//   arr2 = kate.slice(1, -1);

//   const dogs = arr1.concat(arr2);
//   dogs.forEach(function (age, dog) {
//     if (age > 3) {
//       console.log(`Dog Number ${dog + 1} is ${age} yers old and adult`);
//     } else {
//       console.log(`Dog Number ${dog + 1} is  ${age} yers old and still puppy`);
//     }
//   });
// };

// const julia = [3, 5, 2, 12, 7];
// const kate = [4, 1, 15, 8, 3];

// checkDogs(julia, kate);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const euroToUsd = 1.1;
// const movementsUSD = movements.map((mov) => mov * euroToUsd);

// console.log(movements);
// console.log(movementsUSD);

// const calcAverageHumanAge = function (arr) {
//   const humanAge = arr.map(function (mov) {
//     if (mov <= 2) {
//       return mov * 2;
//     } else {
//       return 16 + mov * 4;
//     }
//   });

//   const adult = humanAge.filter((age) => age > 18);

//   const avrg =
//     adult.reduce(function (avrg, mov) {
//       return avrg + mov;
//     }, 0) / adult.length;

//   return avrg;
// };

// const calcAverageHumanAge = function (arr) {
//   const avrg = arr
//     .map((mov) => (mov <= 2 ? mov * 2 : 16 + mov * 4))
//     .filter((age) => age > 18)
//     .reduce((acc, mov, i, arr) => acc + mov / arr.length, 0);
//   return avrg;
// };

// const data1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// console.log(data1);

// const bankDepositSum = accounts
//   .flatMap((acc) => acc.movements)
//   .filter((mov) => mov > 0)
//   .reduce((sum, cur) => sum + cur, 0);
// console.log(bankDepositSum);

// const numDeposits1000 = accounts
//   .flatMap((acc) => acc.movements)
//   .filter((mov) => mov >= 1000).length;
// console.log(numDeposits1000);

// const numDeposits100 = accounts
//   .flatMap((acc) => acc.movements)
//   .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);
// console.log(numDeposits100);

// const sums = accounts
//   .flatMap((acc) => acc.movements)
//   .reduce(
//     (sums, cur) => {
//       cur > 0 ? (sums.deposit += cur) : (sums.withdrowals += cur);
//       return sums;
//     },
//     { deposit: 0, withdrowals: 0 }
//   );
// console.log(sums);

// const convertTitleCase = function (title) {
//   const capitalize = (str) => str[0]?.toUpperCase() + str.slice(1);

//   const expections = ["a", "an", "the", "but", "or", "on", "in", "with"];
//   const titleCase = title
//     .toLowerCase()
//     .split(" ")
//     .map((word) => (expections.includes(word) ? word : capitalize(word)))
//     .join(" ");
//   return capitalize(titleCase);
// };

// console.log(convertTitleCase("and it is a nice in sadasd title"));

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr = ["a", "b", "c", "d", "e"];

// let a = arr.slice();
// a.push("m");
// console.log(arr);
// console.log(a);

// a.splice(-1);
// console.log(arr);
//////////

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = "";

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value">${mov}</div>
    </div>`;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const calcDisplaytBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} EUR`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = `${incomes} EUR`;

  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumOut.textContent = `${Math.abs(out)} EUR`;

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int) => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest} EUR`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};

createUsernames(accounts);

const updateUI = function (acc) {
  displayMovements(acc.movements);
  calcDisplaytBalance(acc);
  calcDisplaySummary(acc);
};

//////

let currentAccount;

btnLogin.addEventListener("click", function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome Back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;
    inputLoginUsername.value = inputLoginPin.value = ``;
    inputLoginPin.blur();
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );

  inputTransferAmount.value = inputTransferTo.value = "";

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }
  inputLoanAmount.value = "";
});

btnClose.addEventListener("click", function (e) {
  e.preventDefault();
  const removeUser = inputCloseUsername.value;
  const removePin = Number(inputClosePin.value);

  if (
    currentAccount.username === removeUser &&
    currentAccount.pin === removePin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = "";
});

const accountMovements = accounts
  .map((acc) => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(accountMovements);

let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////

const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

/////1
dogs.forEach(function (dog) {
  dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
});

console.log(dogs);

///2
const serah = dogs.find((dog) => dog.owners.includes("Sarah"));
console.log(
  `Dog ${
    dogs.curFood > dogs.recommendedFood ? "eats to much" : "eats too little"
  }`
);

///3

const ownersEatTooMuch = dogs
  .filter((dog) => dog.curFood > dog.recommendedFood)
  .map((own) => own.owners)
  .flat();

console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter((dog) => dog.curFood < dog.recommendedFood)
  .map((own) => own.owners)
  .flat();

console.log(ownersEatTooLittle);

///4
console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat to much`);
console.log(`${ownersEatTooLittle.join(" and ")}'s dogs eat to little`);

///5
const eatWell = dogs.some((dog) => dog.curFood === dog.recommendedFood);
console.log(eatWell);

///6

const eatOk = dogs.some(
  (dog) =>
    dog.curFood > dog.recommendedFood * 0.9 &&
    dog.curFood < dog.recommendedFood * 1.1
);
console.log(eatOk);

///7

const dogsEatOk = dogs.filter(
  (dog) =>
    dog.curFood > dog.recommendedFood * 0.9 &&
    dog.curFood < dog.recommendedFood * 1.1
);

console.log(dogsEatOk);

////8
