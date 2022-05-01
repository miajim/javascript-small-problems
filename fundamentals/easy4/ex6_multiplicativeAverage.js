/*
Write a function that takes an array of integers as input, multiplies all of the integers together, 
divides the result by the number of entries in the array, and returns the result as a string with the 
value rounded to three decimal places.

Algorithm
- iterate over the input array, multiplying all integers together to get a single product
- divide the total product by the array length and round to 3 decimal places
- convert the rounded product to a string and return the value
*/

function showMultiplicativeAverage(arr) {
  return arr.reduce((product, num) => product * num) / arr.length).toFixed(3); // toFixed returns a string
}

console.log(showMultiplicativeAverage([3, 5]));                   // "7.500"
console.log(showMultiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"