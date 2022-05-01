  /*
Take the number 735291 and rotate it by one digit to the left, getting 352917. Next, keep the first digit fixed in place and rotate the remaining digits to get 329175. Keep the first two digits fixed in place and rotate again to get 321759. Keep the first three digits fixed in place and rotate again to get 321597. Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579. The resulting number is called the maximum rotation of the original number.

Write a function that takes an integer as an argument and returns the maximum rotation of that integer. You can (and probably should) use the rotateRightmostDigits function from the previous exercise.

Algorithm 
- from index 0 to index length of the number - 2 inclusive
- rotate the rightmost digit 
  - for num: the number passed to maxRotation
  - for n: the length of the digits array minus the current index - 1
  - the rotated number becomes the starting num for the next iteration 

*/

function maxRotation(num) {
  let numDigits = [...String(num)].length; 

  for (let i = 0; i <= numDigits - 2; i += 1) {
    num = rotateRightmostDigits(num, numDigits - i);
  }
  
  return num;
}

function rotateRightmostDigits(num, n) {
  let digits = [...String(num)]; 
  let numDigits = digits.length;
  
  for (let i = numDigits - n; i < numDigits - 1; i += 1) {
    [digits[i], digits[i + 1]] = [digits[i + 1], digits[i]];
  }
  
  return Number(digits.join(''));
}


// as a function of ex1_rotation1.js and ex2_rotation2.js
function rotateArray(arr) {
  if (Array.isArray(arr)) return arr.slice(1).concat(arr.slice(0, 1));
}

function rotateRightmostDigits(num, n) {
  let digits = [...String(num)]; 
  let numDigits = digits.length;
  let i = numDigits - n;
  
  return Number(digits.slice(0, i).concat(rotateArray(digits.slice(i))).join(''));
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845