/*
PEDAC
UNDERSTAND THE PROBLEM
  Inputs
    - single string
  Outputs
    - integer
Rules/Implicit Requirements
  - string only contains numeric characters, no spaces 
  - must return the integer represented by the string
  -
Clarifying Questions
  -
Mental Model (optional)
  -

EXAMPLES/TEST CASES
stringToInteger('4321');      // 4321
stringToInteger('570');       // 570

DATA STRUCTURE
  Inputs
    - convert string to array?
  Rules
    - use array index as the power of 10

ALGORITHM
  - define a constant containing the numbers 0 to 9 as strings in an array
  - split the input string into individual characters and store as an array
  - reverse the array of characters
  - iterate over the reversed array by index
  - map the current character to the constant, returning the corresponding index
  - multiply this number by 10 ^ index 
  - add this number to a total sum
  - return the total sum
CODE
*/

function stringToInteger(str) {
  const INTEGERS = '0123456789'.split('');
  let numArr = str.split('').reverse(); 
  let total = 0;
  for (let i = 0; i < numArr.length; i++) {
    total += INTEGERS.indexOf(numArr[i]) * Math.pow(10, i);
  }
  return total;
}

console.log(stringToInteger('4321'));      // 4321
console.log(stringToInteger('570'));       // 570