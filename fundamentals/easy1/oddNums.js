/* Log all odd numbers from 1 to 99, inclusive, to the console, with each number on a separate line. */

// for (let num = 1; num <= 25; num += 2) {
//   console.log(num);
// }

/* Further Exploration 
Repeat this exercise with a technique different from the one that you used, and different from the one provided. 
Also consider adding a way for the user to specify the limits of the odd numbers logged to the console. */

let rlSync = require('readline-sync');

let firstNum = Number(rlSync.question('Enter the first odd number to print: '));
let lastNum = Number(rlSync.question('Enter the last odd number to print: '));
let num = firstNum;

while (num <= lastNum) {
  console.log(num);
  num += 2;
}
