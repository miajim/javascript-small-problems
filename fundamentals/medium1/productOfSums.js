/* The productOfSums function shown below is expected to return the product 
of the sums of two arrays of numbers. Read through the following code. 
Will it produce the expected result? Why or why not?
*/

// function productOfSums(array1, array2) {
//   let result = total(array1) * total(array2);
//   return result;
// }

// function total(numbers) {
//   let sum;

//   for (let i = 0; i < numbers.length; i += 1) {
//     sum += numbers[i];
//   }

//   sum;
// }

/* It will not produce the expected result because sum is never initialized to 0.
and the total method isn't explicitly returning a value, so it returns undefined. */

// Refactored

function productOfSums(array1, array2) {
  let result = total(array1) * total(array2);
  return result;
}

function total(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
  }

  return sum;
}

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
console.log(productOfSums(arr1, arr2));