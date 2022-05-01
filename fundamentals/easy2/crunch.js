/*
Write a function that takes a string argument and returns a new string that contains the value of the original string
with all consecutive duplicate characters collapsed into a single character.
*/

// function crunch(str) {
//   let crunchedStr = '';
//   let previousChar = '';

//   for (let idx = 0; idx < str.length; idx++) {
//     currentChar = str[idx];
//     if (currentChar === previousChar) {
//       continue;
//     } else {
//       crunchedStr += previousChar;
//       previousChar = currentChar;
//     }
//   }
//   crunchedStr += previousChar;
//   console.log(crunchedStr);
// }

// crunch('ddaaiillyy ddoouubbllee');    // "daily double"
// crunch('4444abcabccba');              // "4abcabcba"
// crunch('ggggggggggggggg');            // "g"
// crunch('a');                          // "a"
// crunch('');                           // ""

// Further Exploration
/* 
You may have noticed that the solution continues iterating until index points to the last character in the string,
 which means that text[index + 1] is beyond the end of the string during the last iteration. Why does it do this? 
 What happens if we stop iterating when index is equal to text.length - 1?

It's also possible to solve this using regular expressions. For a nice challenge, give this a try with regular expressions.
 Can you think of any other solutions that don't use regular expressions?


Algorithm 1
- define a constant that stores a string representing the alphabet
- iterate over the array constant
  - if the string contains one or more of the the current letter, replace it with exactly one of the current letter & store in a variable
- return the "flattened" version of the string

Algorithm 2
- while the string length > 0
- add the character at str[0] to a variable keeping track of the crunched string
- find the first match of one or more of the current char (str[0])
- slice the string from 0 for a length of the match
- use the sliced string to repeat the sequence
*/

// Code for Algorithm 1
// const ALPHANUMERIC = 'abcdefghijklmnopqrstuvwxyz 0123456789_'

// function crunch(str) {
//   let crunchedStr = str;
//   for (let i = 0; i < ALPHANUMERIC.length; i++) {
//     currentChar = ALPHANUMERIC[i];
//     crunchedStr = crunchedStr.replace(new RegExp(currentChar + '+', 'g'), currentChar);
//   }
//   return console.log(crunchedStr);
// }


// Code for Algorithm 2

function crunch(str) {
  let strCopy = str;
  let crunchedStr = '';
  while (strCopy.length > 0) {
    crunchedStr += strCopy[0];
    let matchStr = strCopy.match(new RegExp(strCopy[0] + '+'))[0];
    strCopy = strCopy.slice(matchStr.length);
  }
  return console.log(crunchedStr);
}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""
