/*
Read through the code shown below. What does it log to the console at lines 6 and 10?
*/

let myArray = [1, 2, 3, 4];
const myOtherArray = myArray;

myArray.pop(); // returns 4
console.log(myArray); // [1, 2, 3]
console.log(myOtherArray); // [1, 2, 3]

myArray = [1, 2];
console.log(myArray); // [1, 2]
console.log(myOtherArray); // [1, 2, 3]
