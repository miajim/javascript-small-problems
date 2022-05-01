/*
Write a function that rotates the last n digits of a number. For the rotation, rotate by one digit to the left,
moving the first digit to the end.

- Assume n will always be 1..number of digits in the number
Algo
- turn the number into a string
- split the string into an array of digits
- starting at index array length - n (starting left index)
  - swap the left index with the index to the right of it
  - continue until the right index = array length - 1
- join the values in the rotated array and convert the string back to a number

*/


function rotateRightmostDigits(num, n) {
  let digits = [...String(num)]; 
  let numDigits = digits.length;
  
  for (let i = numDigits - n; i < numDigits - 1; i += 1) {
    [digits[i], digits[i + 1]] = [digits[i + 1], digits[i]];
  }
  
  return Number(digits.join(''));
}

// as a function of ex1_rotation1.js
function rotateArray(arr) {
  if (Array.isArray(arr)) return arr.slice(1).concat(arr.slice(0, 1));
}

function rotateRightmostDigits(num, n) {
  let digits = [...String(num)]; 
  let numDigits = digits.length;
  let i = numDigits - n;
  
  return Number(digits.slice(0, i).concat(rotateArray(digits.slice(i))).join(''));
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917