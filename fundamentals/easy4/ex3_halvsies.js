/*
Write a function that takes an array as an argument and returns an array that contains two elements, each of which is an array. Put the first half of the original array elements in the first element of the return value, and put the second half in the second element. If the original array contains an odd number of elements, place the middle element in the first half array.

Algorithm
- define a result array that contains two subarrays as the first and second elements
- define a variable to act as a switch, set it equal to true
- iterate over the input array by index
  - if the current index is > floor((length - 1) / 2), flip the switch (should now be false)
  - if the switch is true, append the current element to the first subarray
  - else (the switch is false), append the current element to the second subarray
- return the result array
*/

function halvsies(arr) {
  let result = [[], []];
  let subarrNum = 0;
  
  for (let i = 0; i < arr.length; i += 1) {
    if (i > Math.floor((arr.length - 1) / 2)) subarrNum = 1;
    result[subarrNum].push(arr[i]);
  }
  return result;
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]