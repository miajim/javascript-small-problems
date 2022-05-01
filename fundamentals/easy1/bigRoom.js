/*
Build a program that asks the user to enter the length and width of a room in meters, 
and then logs the area of the room to the console in both square meters and square feet.

Note: 1 square meter == 10.7639 square feet

Do not worry about validating the input at this time. Use the readlineSync.prompt method to collect user input.
*/
let rlSync = require('readline-sync');

const SQMETERS_TO_SQFEET = 10.7639; 

// let length = Number(rlSync.question("Enter the length of the room in meters: \n"));
// let width = Number(rlSync.question("Enter the width of the room in meters: \n")); 

// let area = length * width; // in meters squared


// console.log(`The area of the room is ${area.toFixed(2)} square meters (${(area * SQMETERS_TO_SQFEET).toFixed(2)} square feet).`)

// Further Exploration
// Modify the program so that it asks the user for the input type (meters or feet). 
// Compute for the area accordingly, and log it and its conversion in parentheses.

console.log('Select input units: meters or feet?')
let units = rlSync.prompt().trim();

console.log('Enter the length of the room in meters: ')
let length = Number(rlSync.prompt());

console.log('Enter the length of the room in feet: ')
let width = Number(rlSync.prompt());


let area = length * width;

if (units.match(/^(meters|m)$/i)) {
  console.log(`The area of the room is ${area.toFixed(2)} square meters (${(area * SQMETERS_TO_SQFEET).toFixed(2)} square feet).`);
} else if (units.match(/(feet|f)/i)) {
  console.log(`The area of the room is ${area.toFixed(2)} square feet (${(area / SQMETERS_TO_SQFEET).toFixed(2)} square meters).`);
}
