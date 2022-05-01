/*
Write a function that takes a positive integer as an argument and returns that number with its digits reversed.
*/

function reverser(num){
  return [...String(num)].reverse().join('');
}

function reverseNumber(num) {
  return Number(reverser(num));
}
console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that zeros get dropped!
console.log(reverseNumber(1));        // 1