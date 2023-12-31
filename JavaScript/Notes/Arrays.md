# Arrays

## create and fill
- `const arr = new Array(7);` create an array with 7 empty elements: `[empty × 7]`
  - `const arr2 = [...arr];` create a new array with the same length and elements
- `arr.fill(1);` fill the array with 1: `[1, 1, 1, 1, 1, 1, 1]`
  - `arr.fill(1, 3);` fill the array with 1 from index 3: `[empty × 3, 1, 1, 1, 1]`
  - `arr.fill(1, 3, 5);` fill the array with 1 from index 3 to 5: `[empty × 3, 1, 1, empty × 2]`
- `const arr = Array.from({length: 7}, () => 1);` create an array with 7 elements, each element is 1: `[1, 1, 1, 1, 1, 1, 1]` is the same as `const arr = new Array(7).fill(1);`

## slice
slice does not mutate the original array, it returns a new array
- `arr.slice(start);`
- `arr.slice(start, end);`
- `arr.slice(-1);` last element

## splice
splice mutates the original array, it returns the deleted elements and the original array is changed
- `arr.splice(start, deleteCount);` deleteCount is optional, it will delete (deleteCount) elements from start

## reverse
reverse mutates the original array, it returns the reversed array and the original array is changed
- `arr.reverse();`

## concat
concat does not mutate the original array, it returns a new array
- `arr.concat(arr2);`

## join
join does not mutate the original array
join returns a string
- `arr.join(' ');` join the elements with ' '

## at
arr[0] is the same as arr.at(0)
it is useful when you want to use negative index to get the last element
- `arr.at(-1);` last element
it also works on strings
- `str.at(-1);` last character

## forEach
it's similar to for-of loop
- `arr.forEach(function(el, i, arr){});`
  - el: element
  - i: index
  - arr: array
  - the order of the parameters cannot be changed
- use arrow function: `arr.forEach(el => {});`, `arr.forEach((el, i) => {});`

**forEach with Maps**
To loop over maps, we need to use the `map.forEach()` method:
- `map.forEach(function(value, key, map){});`
  - value: value
  - key: key
  - map: map
  - the order of the parameters cannot be changed

**forEach with Sets**
To loop over sets, we need to use the `set.forEach()` method:
- `set.forEach(function(value, key, set){});`
  - value: value
  - key: same as value in sets
  - set: set
- To avoid confusion, we can use the same name for value and key: `set.forEach(function(value, _, set){});`

## map
`map` returns a new array containing the results of applying an operation on all original array elements
- `const arr2 = arr.map(item => item * 2);`

## filter
`filter` returns a new array containing the array elements that passed a specified test condition

## reduce
`reduce` boils ("reduces") all array elements down to one single value (e.g. adding all elements together)
- snowball effect
- get the sum of all elements
  - `const arrSum = arr.reduce((acc, cur) => acc + cur, 0);`
  - acc: accumulator
  - cur: current value
  - 0: initial value
- get the average of all elements
  - `const arrAvg = arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);`
- get the maximum value
  - `const max = arr.reduce((acc, cur) => acc > cur ? acc : cur);`

## find
`find` returns the value of the **first** array element that passed a specified test function
- `const firstNegative = arr.find(el => el < 0);`
  - == `const firstNegative = arr.filter(el => el < 0)[0];`
- get the index of the element
  - `const firstNegativeIndex = arr.findIndex(el => el < 0);`

## includes
`includes` returns true if the array contains a certain element, and false if not
- equality
  - `arr.includes('2');` returns false
  - `arr.includes(2);` returns true

## some
`some` returns true if at least one element meets the condition
- condition
  - `arr.some(el => el === 2);` returns true
  - `arr.some(el => el === 20);` returns false

## every
`every` returns true if all elements meet the condition
- condition
  - `arr.every(el => el === 2);` returns false
  - `arr.every(el => el > 0);` returns true

## flat
`flat` returns a new array with all sub-array elements concatenated into it recursively up to the specified depth
```js
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat()); // [1, 2, 3, 4, 5, 6, 7, 8]

// 2 levels deep
const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat()); // [[1, 2], 3, 4, [5, 6], 7, 8]
console.log(arrDeep.flat(2)); // [1, 2, 3, 4, 5, 6, 7, 8]

// duplicate elements in different levels will not be removed
const arrDup = [1,[1,2],[1,2,3]];
console.log(arrDup.flat()); // [1, 1, 2, 1, 2, 3]
```

## flatMap
`flatMap` = `map` + `flat`
```js
// map and then flat
arr.map(el => el * 2).flat().reduce((acc, cur) => acc + cur, 0);
// flatMap
arr.flatMap(el => el * 2).reduce((acc, cur) => acc + cur, 0);
```

## sort
`sort` sorts the elements of an array in place and returns the sorted array
- `arr.sort();` sort by unicode, works for strings
- `arr.sort((a, b) => a - b);` sort by number

