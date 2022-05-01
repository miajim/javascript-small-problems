/*
Write a function that computes the difference between the square of the sum of the first n positive integers and the sum of the squares of the first n positive integers.
*/

function sumSquareDifference(num) {
  const squareOfSum = (arr) => { return Math.pow(arr.reduce((sum, num) => sum + num), 2)};
  const sumOfSquare = (arr) => { return arr.reduce((sum, num) => sum + Math.pow(num, 2), 0)};
  let nums = [...new Array(num)].map((_, index) => index + 1);
  return squareOfSum(nums) - sumOfSquare(nums);
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150

