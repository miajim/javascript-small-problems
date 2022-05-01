/*
Write a function that takes two arrays as arguments and returns an array containing the union of the values from the two. There should be no duplication of values in the returned array, even if there are duplicates in the original arrays. You may assume that both arguments will always be arrays.

Algorithm
* Assume arrays will always be of the same length as well

- Define a new array to contain the union of values from the arrays
- Iterate over the elements in one array
- Add the element in the array if it doesn't already exist in the union array
  - Could use a hash to do this more efficiently 
- Return the union array
*/

// function union(arr1, arr2) {
//   let unionOfArrays = {};
  
//   arr1.forEach((elem, i) => { unionOfArrays[elem]
//     if (!unionOfArrays[elem]) { unionOfArrays[elem] = true }
//     if (!unionOfArrays[arr2[i]]) { unionOfArrays[arr2[i]] = true }
//   });
  
//   return [...new Set(Object.keys(unionOfArrays))]map((numStr) => Number(numStr));
// }

function union(arr1, arr2) {
  let arr3 = arr1.slice();
  arr2.forEach((num) => arr3.push(num));
  return [...new Set(arr3)];
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]