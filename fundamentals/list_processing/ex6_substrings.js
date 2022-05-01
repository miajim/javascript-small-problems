/*
Write a function that returns a list of all substrings of a string. 
Order the returned list by where in the string the substring begins. 
This means that all substrings that start at index position 0 should come first, 
\then all substrings that start at index position 1, and so on. 
Since multiple substrings will occur at each position, return the substrings at a 
given index from shortest to longest.

You may (and should) use the leadingSubstrings function you wrote in the previous exercise:
*/

// function leadingSubstrings(str) {
//   return [...str].reduce((arr, _, i) => {
//     arr.push(str.slice(0, i + 1));
//     return arr;
//   }, []);
// }

function leadingSubstrings(string) {
  let substrings = [];
  for (let length = 1; length <= string.length; length += 1) {
    substrings.push(string.slice(0, length));
  }

  return substrings;
}

// using leadingSubstrings
function substrings(str) {
  let substrArr = [];
  while (str) {
    substrArr = [...substrArr, ...leadingSubstrings(str)];
    str = str.slice(1);
  }
  return substrArr;
}

// not using leadingSubstrings
// function substrings(str) {
//   let substrArr = [];
//   const minSubstrLength = 2;

//   for (let i = 0; i < str.length; i += 1) {
//     for (let j = i + minSubstrLength; j <= str.length; j += 1) {
//       substrArr.push(str.slice(i, j));
//     }
//   } 
//   return substrArr;
// }

console.log(substrings('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]