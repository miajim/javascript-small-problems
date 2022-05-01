/*
Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 17

The number 17 appears in [25, 15, 20, 17, 23].

-----

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 18

The number 18 does not appear in [25, 15, 20, 17, 23].
*/

let rlSync = require('readline-sync');

// function formatNum(num) {
//   switch (num) {
//     case 1:
//       return '1st';
//     case 2:
//       return '2nd';
//     case 3:
//       return '3rd';
//     default:
//       return `${num}th`;
//   }
// }

// let numbers = {};

// for (let iter = 1; iter <= 5; iter += 1) {
//   let number = rlSync.question(`Enter the ${formatNum(iter)} number: `);
//   numbers[number] = true;
// }

// let guess = rlSync.question(`Enter the last number: `);
// let answer = numbers[guess] ? ' appears' : ' does not appear';

// console.log(`The number ${guess + answer} in [${Object.keys(numbers).join(', ')}].` );

/*
Further Exploration
What if the problem was looking for a number that satisfies some condition (e.g., a number greater than 25), instead of a specific number? 
Would the current solution still work? Why or why not? Think about this first before scrolling down.
*/

// LS solution
function isIncluded(arr, val) {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > val) {
      return true;
    }
  }

  return false;
}

const numbers = [];

numbers.push(rlSync.question('Enter the 1st number:'));
numbers.push(rlSync.question('Enter the 2nd number:'));
numbers.push(rlSync.question('Enter the 3rd number:'));
numbers.push(rlSync.question('Enter the 4th number:'));
numbers.push(rlSync.question('Enter the 5th number:'));

let lastNumber = rlSync.question('Enter the last number:');

if (numbers.some(num => num > lastNumber)) {
  console.log(`A number greater than ${lastNumber} appears in [${numbers.join(', ')}].`);
} else {
  console.log(`A number greater than ${lastNumber} does not appear in [${numbers.join(', ')}].`);
}