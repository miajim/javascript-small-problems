/* 
In the modern era under the Gregorian Calendar, leap years occur in every year that is evenly divisible by 4, 
unless the year is also divisible by 100. If the year is evenly divisible by 100, then it is not a leap year,
unless the year is also evenly divisible by 400.

Assume this rule is valid for any year greater than year 0. Write a function that takes any year greater 
than 0 as input and returns true if the year is a leap year or false if it is not a leap year.

- leap
- evenly divisible by 4 but not 100
- evenly divisible by 100 
*/

// function isLeapYear(year) {
//   let leapYear = false;
//   if (year % 4 === 0) {
//     leapYear = true;
//     if (year % 100 === 0) {
//       leapYear = false;
//       if (year % 400 == 0) {
//         leapYear = true;
//       }
//     }
//   } 
//   console.log(leapYear);
// }

// isLeapYear(2016);      // true
// isLeapYear(2015);      // false
// isLeapYear(2100);      // false
// isLeapYear(2400);      // true
// isLeapYear(240000);    // true
// isLeapYear(240001);    // false
// isLeapYear(2000);      // true
// isLeapYear(1900);      // false
// isLeapYear(1752);      // true
// isLeapYear(1700);      // false
// isLeapYear(1);         // false
// isLeapYear(100);       // false
// isLeapYear(400);       // true

// Further Exploration
/* 
The order in which you perform tests for a leap year calculation is important. 
For what years will isLeapYear fail if you rewrite it as shown below?
*/

// This will fail for years divisible by 400, b/c years divisible by 400 are also divisible by 100, and will return false
// before it gets to execute the next branch.

// function isLeapYear(year) {
//   if (year % 100 === 0) { 
//     return false;
//   } else if (year % 400 === 0) {
//     return true;
//   } else {
//     return year % 4 === 0;
//   }
// }

/*
Can you rewrite isLeapYear to perform its tests in the opposite order of the above solution? 
That is, test whether the year is divisible by 4 first, then, if necessary, test whether it is divisible by 100, and finally,
if necessary, test whether it is divisible by 400. 
Is this solution simpler or more complex than the original solution?
*/

// This check will fail for numbers that are divisible by 4 and 100 (e.g., 2100).
function isLeapYear(year) {
  if (year % 4 === 0) { 
    return console.log(true);
  } else if (year % 100 === 0) {
    return console.log(false);
  } else {
    return console.log(year % 400 === 0);
  }
}


// Leap Years Part 2
/*
This is a continuation of the previous exercise.

The British Empire adopted the Gregorian Calendar in 1752, which was a leap year.
Prior to 1752, they used the Julian Calendar. Under the Julian Calendar, leap years occur in any year that is evenly divisible by 4.

Using this information, update the function from the previous exercise to determine leap years both before and after 1752.
*/

function isLeapYear(year) {
  let leapYear = false;

  if (year < 1752) {
    leapYear = year % 4 === 0
  } else {
    if (year % 4 === 0) {
      leapYear = true;
      if (year % 100 === 0) {
        leapYear = false;
        if (year % 400 == 0) {
          leapYear = true;
        }
      }
    } 
  }
  
  console.log(leapYear);
}