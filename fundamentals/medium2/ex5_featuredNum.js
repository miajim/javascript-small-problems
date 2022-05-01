
/*
A featured number (something unique to this exercise) is an odd number that is a multiple of 7, with all of its digits occurring exactly once each. For example, 49 is a featured number, but 98 is not (it is not odd), 97 is not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

Write a function that takes an integer as an argument and returns the next featured number greater than the integer. Issue an error message if there is no next featured number.

NOTE: The largest possible featured number is 9876543201.

Algorithm
- current number = starting at the input number + 1
- guard clause: return "There is no possible number that fulfills those requirements." if the current number exceeds the largest possible featured number (9876543201).
- check to see if the current number is a featured number
    - must be odd ( num % 2 === 1)
    - must be a multiple of 7 (num % 7 === 0)
    - array of unique digits = array of all digits
  - if it is => return the number 
  - otherwise => add 1 to the current number and repeat the process again
*/

function isFeaturedNum(num) {
  const isOdd = (num) => num % 2 === 1;
  const isMultipleOf7 = (num) => num % 7 === 0;
  const isUnique = (num) => {
    let digits = [...String(num)]; 
    let uniqueDigits = [...new Set(digits)];
    return digits.length === uniqueDigits.length;
  };  
  
  return isOdd(num) && isMultipleOf7(num) && isUnique(num);
}


function featured(startingNum) {
  for (let currentNum = startingNum + 1; currentNum <= 9876543201; currentNum += 1) {
    if (isFeaturedNum(currentNum)) return currentNum;
  }
  return "There is no possible number that fulfills those requirements.";
}


console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."