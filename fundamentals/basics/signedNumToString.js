/*
In the previous two exercises, you developed functions that convert simple numeric strings to signed integers. 
In this exercise and the next, you're going to reverse those functions.

You will learn more about converting strings to numbers by writing a function that takes a positive integer or zero, 
and converts it to a string representation.

You may not use any of the standard conversion functions available in JavaScript, such as String(), Number.prototype.toString, 
or an expression such as '' + number. Your function should do this the old-fashioned way and construct the string by analyzing and manipulating the number.
*/

const DIGITS = '0123456789'.split('');
// console.log(DIGITS);

function integerToString(num) {
  if (num === 0) return '0';
  let numCopy = num;
  let str = '';

  while (numCopy > 0) {
    // console.log(DIGITS[numCopy % 10]);
    str = DIGITS[numCopy % 10] + str;
    numCopy = Math.floor(numCopy / 10);
  }
  return str;
}

function signedIntegerToString(num) {
  let prefix = '';
  if (num < 0) {
    prefix = '-';
  } else if (num > 0) {
    prefix = '+';
  }
 return prefix + integerToString(Math.abs(num));
}

console.log(signedIntegerToString(4321));      // "+4321"
console.log(signedIntegerToString(-123));      // "-123"
console.log(signedIntegerToString(0));         // "0"