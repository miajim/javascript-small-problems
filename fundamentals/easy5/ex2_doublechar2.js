/*
Write a function that takes a string, doubles every consonant character in the string, and returns the result as a new string. The function should not double vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.
*/

function doubleConsonants(str) {
  const CONSONANTS = /[b-df-hj-np-tv-z]/i;
  return [...str].map(char => {
    if (CONSONANTS.test(char)) {
      return char.repeat(2)
    } else { return char }
  }).join('');
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""