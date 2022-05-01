/*
Write a function that returns true if its integer argument is palindromic, or false otherwise. 
A palindromic number reads the same forwards and backwards.

isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true
*/

function isPalindrome(str) {
  return str === [...str].reverse().join('');
}

function isPalindromicNumber(num) {
  return isPalindrome(String(num));
}

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true

/* Further Exploration
Suppose the number argument begins with one or more 0s. Will the solution still work? Why or why not? Is there any way to address this?
*/

console.log(isPalindromicNumber(0005000)); // will return false with original definition