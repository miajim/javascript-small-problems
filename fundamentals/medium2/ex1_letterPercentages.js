/*
Write a function that takes a string and returns an object containing the following three properties:

the percentage of characters in the string that are lowercase letters
the percentage of characters that are uppercase letters
the percentage of characters that are neither
You may assume that the string will always contain at least one character.

Examples:
letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }


Algorithm
- determine the length of the input string => store in a variable, denominator
- define a hash to keep track of the number of each type of char
  - keys: lowercase, uppercase: neither
  - values: all start at 0
- iterate over characters in the input string
- if the letter is lowercase a-z
  - add 1 to the lowercase key value
- if the letter is uppercase A-Z
  - add 1 to the uppercase key value
- otherwise (the letter is neither lowercase nor uppercase a-z)
  - add 1 to the neither key value
- divide each value in the hash by the total number of chars (denominator)
- return the mutated hash
*/

function format(hash) {
  for (let key in hash) {
    hash[key] = hash[key].toFixed(2)
  }
  return hash;
}

function letterPercentages(str) {
  let totalChars = str.length;
  let result = {lowercase: 0, uppercase: 0, neither: 0};
  let count = (1 / totalChars * 100);
  [...str].forEach(char => {
    if (/[a-z]/.test(char)) {
      result.lowercase += count;
    } else if (/[A-Z]/.test(char)) {
      result.uppercase += count;
    } else { result.neither += count; }
  });
  return format(result);
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// // { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
