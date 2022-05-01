/*
Write a function that takes a floating point number representing an angle between 0 and 360 degrees and returns a string representing that angle in degrees, minutes, and seconds. You should use a degree symbol (˚) to represent degrees, a single quote (') to represent minutes, and a double quote (") to represent seconds. There are 60 minutes in a degree, and 60 seconds in a minute.

Algorithm 
- Degrees => everything to the left of the decimal point
- Minutes => everything to the right of the degrees decimal point * 60
- Seconds => everything to the right of the minutes decimal point * 60

- define the constants MINUTES_IN_DEGREE, SECONDS_IN_MINUTE
- convert the number to a string
- split the string at the decimal point
- take the number to the left of the decimal point => degrees
- take the number to the right of the decimal point * 60 => minutes

- split the string (minutes) at the decimal point
- take the number to the left of the decimal point => minutes
- take the number to the right of the decimal point * 60 => seconds

- join the degrees minutes seconds with the corresponding symbols 
*/

function formatDMS(arr) {
  const UNITS = ['˚', "'", '"'];
  return arr.join('-');
  // return arr.map((num, idx) => { return num + UNITS[idx]) }).join('');
}

function dms(angle, arr = []) {
  let [left, right] = String(angle.toFixed(4)).split('.');
  arr.push(left);
  console.log(arr);
  if (arr.length === 3) return arr.join('-');
  dms(Number(right/100 || 0) * 0.60, arr);
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"

// Further Exploration
/*
The current solution implementation only works with positive numbers in the range of 0 to 360 (inclusive). 
Can you refactor it so that it works with any positive or negative number?

Our solution returns the following results for inputs outside the range 0-360:

dms(-1);   // -1°00'00"
dms(400);  // 400°00'00"
dms(-40);  // -40°00'00"
dms(-420); // 420°00'00"

Since degrees are normally restricted to the range 0-360, can you modify the code 
so it returns a value in the appropriate range when the input is less than 0 or greater than 360?

dms(-1);   // 359°00'00"
dms(400);  // 40°00'00"
dms(-40);  // 320°00'00"
dms(-420); // 300°00'00"
*/