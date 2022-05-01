/*
Write a function that takes an array of numbers and
returns the sum of the sums of each leading subsequence in that array.
Examine the examples to see what we mean.
You may assume that the array always contains at least one number.

Algorithm 
- create a copy of the original array
- find the sum of all elements in the array
- pop the last element off the array, becoming the new array
- call sumOfSums recursively on the new array until array length = 0
*/

function sumOfSums(arr, total = 0) {
  if (arr.length === 0) return total;
  total += arr.reduce((sum, num) => sum + num);
  return sumOfSums(arr.slice(0, -1), total);
}

let array = [1, 5, 7, 3];
console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums(array));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35

console.log(array);