/* 
Write a program that asks the user to enter an integer greater than 0, 
then asks if the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.

Examples: 
Please enter an integer greater than 0: 5
Enter "s" to compute the sum, or "p" to compute the product. s

The sum of the integers between 1 and 5 is 15.
Please enter an integer greater than 0: 6
Enter "s" to compute the sum, or "p" to compute the product. p

The product of the integers between 1 and 6 is 720.
*/

let rlSync = require('readline-sync');
let integer;
let computation; 

do {
  integer = parseInt(rlSync.question('Please enter an integer greater than 0: '));
  if (integer <= 0 || Number.isNaN(integer)) {
    integer = undefined;
    console.log('That is not a valid input. Try again.');
  }
} while (!integer)

let arr = Array.from(Array(integer), (_num, idx) => idx + 1);

do {
  computation = rlSync.question('Enter "s" to conpute the sum, or "p" to compute the product. ').trim();
  let result = 0;

  if (computation.match(/^s$/i)) {
    result = arr.reduce((accumulator, value) => accumulator + value)
    console.log(`The sum of the integers between 1 and ${integer} is ${result}.`);
  } else if (computation.match(/^p$/i)) {
    result = arr.reduce((accumulator, value) => accumulator * value, 1)
    console.log(`The product of the integers between 1 and ${integer} is ${result}.`);
  } else {
    computation = undefined;
    console.log('That is not a valid input. Try again.')
  }
} while (!computation)


// Further Exploration 
/*
What if the input was an array of integers instead of just a single integer? 
How would your computeSum and computeProduct functions change? Given that the input is an array,
how might you make use of the Array.prototype.reduce() method?

My solution addresses the further exploration.
*/