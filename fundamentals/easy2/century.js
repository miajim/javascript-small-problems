/*
Write a function that takes a year as input and returns the century. 
The return value should be a string that begins with the century number, 
and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

New centuries begin in years that end with 01. So, the years 1901 - 2000 comprise the 20th century.
ends in (0, 4-9) => th
end in (1) => st
  unless ends in 11 => th
ends in (2) => nd
  unless ends in 12 => th
ends in (3) => rd
  unless ends in 13 => th

1st
2nd
3rd
4th
5th
.
. 11th
.
20th
21st
22nd
23rd
23th

*/

function century(year) {
  let century = Math.ceil(year / 100);
  let remainder = century % 10;

  if (remainder === 0 || (remainder >= 4 && remainder <= 9 ))  {
    century = String(century) + "th";
  } else if (remainder === 1) {
    century = String(century) + (century % 100 === 11 ? "th" : "st");
  } else if (remainder === 2) {
    century = String(century) + (century % 100 === 12 ? "th" : "nd");
  } else {
    century = String(century) + (century % 100 === 13 ? "th" : "rd");
  }

  return console.log(century);
}


century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"