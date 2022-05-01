/* In the previous exercise, the value of the reference gets copied. 
For this exercise, only the values of the array should be copied, but not the reference. 
Implement two alternative ways of doing this.

Here is the code from the previous exercise:
*/
let myArray = [1, 2, 3, 4];
// const myOtherArray = myArray;

// myArray.pop();
// console.log(myOtherArray);

// myArray = [1, 2];
// console.log(myOtherArray);

// option 1
const array1 = myArray.slice(); // still points to the same elements as myArray (creates a shallow copy)
myArray.pop();
console.log(myArray);
console.log(array1);

// option 2
const array2 = Array.from(myArray); // also creates a shallow copy
myArray.pop();
console.log(myArray);
console.log(array2);