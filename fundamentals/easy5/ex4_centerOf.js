/*
Write a function that takes a non-empty string argument and returns the middle character(s) of the string. If the string has an odd length, you should return exactly one character. If the string has an even length, you should return exactly two characters.

*/

function centerOf(str) {
  let middleIndex = Math.ceil((str.length - 1) / 2);
  let substrOffset = str.length % 2 === 0 ? 1 : 0;
  return str.slice(middleIndex - substrOffset, middleIndex + 1)
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"

//   'r e a d y'
//    0 1 2 3 4 
  
//   'r e a d'
//    0 1 2 3