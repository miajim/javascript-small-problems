/* Create a function that takes two integers as arguments. The first argument is a count, 
and the second is the starting number of a sequence that your function will create. 
The function should return an array containing the same number of elements as the count argument.
The value of each element should be a multiple of the starting number.

You may assume that the count argument will always be an integer greater than or equal to 0. 
The starting number can be any integer. If the count is 0, the function should return an empty array.

*/

/*
Algorithm
- define an array to keep track of the results
- from 1 to count
  - append the current count times the starting number to the result array
- return the result array
*/

// function sequence(count, startingNum) {
//   let results = [];
//   for (let i = 1; i <= count; i += 1) {
//     results.push(i * startingNum);
//   }
//   return results;
// }

// refactored
function sequence(count, startingNum) {
  return [...new Array(count)].fill(startingNum).map((num, i) => num * (i + 1));
}


console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []