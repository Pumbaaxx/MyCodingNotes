'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// use forEach to display all the movements of an account
const displayMovements = function (movements) {
  containerMovements.innerHTML = ''; // clear the container

  movements.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
        <div class="movements__value">${mov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
}
displayMovements(account1.movements);


const calcPrintBalance = function (movements) {
  const balance = movements.reduce((acc, cur) => acc + cur, 0);
  labelBalance.textContent = `${balance}€`;
};
calcPrintBalance(account1.movements);


const calcDisplaySummary = function (movements) {
  const incomes = movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  const outcomes = movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  const interest = movements
    .filter(mov => mov > 0)
    .map(deposit => deposit * 1.2 / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1; // count the interest greater than 1
    })
    .reduce((acc, int) => acc + int, 0);

  labelSumIn.textContent = `${incomes}€`;
  labelSumOut.textContent = `${Math.abs(outcomes)}€`;
  labelSumInterest.textContent = `${interest}€`;
}
calcDisplaySummary(account1.movements);

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner.toLowerCase().split(' ').map(name => name[0]).join('');
    /*
    * toLowerCase().split(): return an array of names
    * map(word => word[0]): map every first letter
    * join(''): return a string of letters
    */
  })
};
createUsernames(accounts);
// console.log(accounts);


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// Array Methods
/////////////////////////////////////////////////
/*
// Basics
let arr = ['a', 'b', 'c', 'd', 'e'];

// slice
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice());
console.log([...arr]);

// splice
// console.log(arr.splice(2));
// arr.splice(-1);
// console.log(arr);

// reverse
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// concat
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// join
console.log(letters.join(' ~ '));

// at() is useful when we need to access the elements from the end
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(1));
console.log(arr[arr.length - 1]);
console.log(arr.at(-1));
console.log("yujie".at(-1));
*/

// forEach
/////////////////////////////////////////////////

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
/*
for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}
console.log('--------');
movements.forEach(movement => {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
});
console.log('--------');
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}
console.log('--------');
movements.forEach(function (movement, i, arr) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
});

// forEach with maps
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// forEach with sets
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}`);
});
*/


// map method

const eurToUsd = 1.1;

// const movementUSD = movements.map(function (mov) {
//   return mov * enrToUsd;
// });
// const movementUSD = movements.map(mov => mov * eurToUsd);
// console.log(movements);
// console.log(movementUSD);

// const movementUSDfor = [];
// for (const mov of movements) {
//   movementUSDfor.push(mov * eurToUsd);
// }
// console.log(movementUSDfor);

// const movementDescriptions = movements.map((mov, i) => {
//   return `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`;
// });

// console.log(movementDescriptions);


// filter method
/*
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(deposits);

const depositFor = []
for (const mov of movements) if (mov > 0) depositFor.push(mov);
console.log(depositFor);

console.log(movements.filter(mov => mov < 0));
*/

// reduce method
/*
console.log(movements);

const balance = movements.reduce(function (acc, cur) {
  // console.log(`balance: ${acc} action: ${cur}`);
  return acc + cur;
}, 0);
console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

console.log(movements.reduce((acc, cur) => acc + cur, 0));

// reduce: get max value
const maxValue = movements.reduce((acc, cur) => acc > cur ? acc : cur, movements[0]);
console.log(maxValue);
*/


// Chaining methods

// pipeline
// const totalDepositsUSD = movements.filter(mov => mov > 0).map(mov => mov * eurToUsd).reduce((acc, mov) => acc + mov, 0);
// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   .map((mov, i, arr) => {
//     console.log(arr);
//     return mov * eurToUsd;
//   })
//   .reduce((acc, mov, i, arr) => {
//     console.log(arr);
//     return acc + mov;
//   }, 0);
// console.log(totalDepositsUSD);

///////////////////////////////////////
// Coding Challenge #1

/*
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀

const checkDogs = function (dogsJulia, dogsKate) {
  // remove the cat ages
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1); // remove the first element
  dogsJuliaCorrected.splice(-2); // remove last two elements

  const dogs = dogsJuliaCorrected.concat(dogsKate);

  dogs.forEach((dog, i) => {
    const type = dog >= 3 ? 'an adult' : 'a puppy';
    console.log(`Dog number ${i + 1} is ${type}, and is ${dog} years old.`);
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
console.log('______');
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
*/

// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀

const calcAverageHumanAge = function (ages) {
  const humanAge = ages.map(age => age <= 2 ? (age * 2) : (16 + age * 4));
  const adultHumanAge = humanAge.filter(age => age >= 18);
  // console.log(adultHumanAge.reduce((acc, cur) => acc + cur, 0) / adultHumanAge.length);
  console.log(adultHumanAge.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0));
};

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
*/


// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const calcAverageHumanAge2 = ages => ages
  .map(age => age <= 2 ? (age * 2) : (16 + age * 4))
  .filter(age => age >= 18)
  .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

console.log(calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]), calcAverageHumanAge2([16, 6, 10, 5, 6, 1, 4]));