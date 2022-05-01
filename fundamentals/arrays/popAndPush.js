/*
In this exercise, you will implement your own version of two Array methods: Array.prototype.pop and Array.prototype.push. 
The pop method removes the last element from an array and returns that element. If pop is called on an empty array, it returns undefined. 
The push method, on the other hand, adds one or more elements to the end of an array and returns the new length of the array.
*/

// pop
// const array1 = [1, 2, 3];
// pop(array1);                        // 3
// console.log(array1);                // [1, 2]
// pop([]);                           // undefined
// pop([1, 2, ['a', 'b', 'c']]);      // ["a", "b", "c"]

// // push
// const array2 = [1, 2, 3];
// push(array2, 4, 5, 6);              // 6
// console.log(array2);                // [1, 2, 3, 4, 5, 6]
// push([1, 2], ['a', 'b']);          // 3
// push([], 1);                       // 1
// push([]);                          // 0


// corrected "buggy" solution
// function pop(array) {
//   const poppedElement = array[array.length - 1];
//   // array.splice[array.length];
//   array.splice(array.length-1);

//   return poppedElement;
// }

// function push(array, ...args) {
//   const length = args.length;

//   for (let i = 0; i < length; i += 1) {
//     array[array.length] = args[i];
//   }

//   return array.length;
// }

// let arr = [1, 2, 3, 4];
// console.log(pop(arr));
// console.log(arr);

// console.log(push(arr, 4, 5));
// console.log(arr);

// Further Exploration
// The current solution for pop uses the Array.prototype.splice method. Can you reimplement the pop function without using the splice method?
function pop(array) {
  const poppedElement = array[array.length - 1];
  array.length -= 1;

  return poppedElement;
}

let arr = [1, 2, 3, 4];
console.log(pop(arr));
console.log(arr);
