/*
The array comparison function that we implemented in the Arrays lesson
implicitly assumed that when comparing two arrays, any matching values must also have matching index positions. 
The objective of this exercise is to reimplement the function so that two arrays containing the same values—but in a different order—are considered equal. 
For example, [1, 2, 3] === [3, 2, 1] should return true. 

*/

function areArraysEqual(array1, array2) {
  if (array1.length !== array2.length) return false;
  let array2Copy = array2.slice();

  for (let i = 0; i < array1.length; i++) {
    let array2Idx = array2Copy.indexOf(array1[i]);
    if (array2Idx !== -1) {
      array2Copy.splice(array2Idx, 1);
    } else {
      return false;
    }
  }
  return true;
}

console.log(areArraysEqual([1, 2, 3], [1, 2, 3]));                  // true
console.log(areArraysEqual([1, 2, 3], [3, 2, 1]));                  // true
console.log(areArraysEqual(['a', 'b', 'c'], ['b', 'c', 'a']));      // true
console.log(areArraysEqual(['1', 2, 3], [1, 2, 3]));                // false
console.log(areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1]));            // true
console.log(areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3]));            // false
console.log(areArraysEqual([1, 1, 2, 2], [4, 2, 3, 1]));            // false
console.log(areArraysEqual([1, 1, 2], [1, 2, 2]));                  // false
console.log(areArraysEqual([1, 1, 1], [1, 1]));                     // false
console.log(areArraysEqual([1, 1], [1, 1]));                        // true