/*
Write a function that takes a string argument and returns true
if all of the alphabetic characters inside the string are uppercase;
otherwise, return false. Ignore characters that are not alphabetic.
*/

// my solution
function isUppercase(str) {
  return str.toUpperCase() === str;
}

// LS Solution
function isUppercase(string) {
  return !/[a-z]/.test(string);
}

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true