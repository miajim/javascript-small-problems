/*
PEDAC
Write a function that takes a string of digits and returns the appropriate number as an integer. 
The string may have a leading + or - sign; if the first character is a +, your function should return a positive number; 
if it is a -, your function should return a negative number. If there is no sign, return a positive number.

You may assume the string will always contain a valid number.

*/
const INTEGERS = '0123456789'.split('');
function stringToInteger(str) {
  let numArr = str.split('').reverse(); 
  let total = 0;
  for (let i = 0; i < numArr.length; i++) {
    total += INTEGERS.indexOf(numArr[i]) * Math.pow(10, i);
  }
  return total;
}

// console.log(stringToInteger('4321'));      // 4321
// console.log(stringToInteger('570'));       // 570

function stringToSignedInteger(str) {
  let sign = '+';
  if (!INTEGERS.includes(str[0])) { 
    sign = str[0];
    str = str.slice(1) 
  }
  return (sign === '+' ? 1 : -1) * stringToInteger(str);
}

console.log(stringToSignedInteger('4321'));      // 4321
console.log(stringToSignedInteger('-570'));      // -570
console.log(stringToSignedInteger('+100'));      // 100