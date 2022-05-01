
/*
Write a function that takes a year as an argument and returns the number of 'Friday the 13ths' in that year. You may assume that the year is greater than 1752 (when the modern Gregorian Calendar was adopted by the United Kingdom). You may also assume that the same calendar will remain in use for the foreseeable future.

When do Friday the 13th's occur? 

28 days => Feb
29 days (leap year) => Feb
30 days => Apr, Jun, Sept, Nov
31 days => Jan, Mar, May, Jul, Aug, Oct, Dec

What constitutes a leap year? 


Jan (31) Feb (28/29) Mar(31) Apr(30) May(31) Jun(30) Jul(31) Aug(31) Sept(30) Oct(31) Nov(30) Dec(31)
General Algorithm
- Declare a variable to keep track of the number of Friday the 13th's in the given year
- Determine the date of the first Friday in January of the input year, XXXX
  1 => 8 + 7*4 - 31 = 5
  2 => 9 
  3 => 10
  4 => 11
  5 => 12
  6 => 13
  7 => 14
- Iterate through a list of all the months in the year (1-12)
- Determine the day of the week of month/13/year
  - If the day is Friday (5th index), add 1 to the to total
- Return the total

*/

const FRIDAY = 5;
const THIRTEENTH = 13;

// function fridayThe13ths(year) {
//   let friday13ths = 0;
//   for (let month = 0; month < 12; month += 1) {
//     let date = new Date(year, month, THIRTEENTH);
//     if (date.getDay() === FRIDAY) { friday13ths += 1}
//   }
//   return friday13ths;
// }

// refactored
function fridayThe13ths(year) {
  let date;
  return [...new Array(12)].reduce((total, _, month) => {
    date = new Date(year, month, THIRTEENTH);
    return (date.getDay() === FRIDAY ? total + 1 : total);
  }, 0);
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2