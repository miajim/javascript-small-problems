/*
Build a program that logs when the user will retire and how many more years the user has to work until retirement.

What is your age? 30
At what age would you like to retire? 70

It's 2017. You will retire in 2057.
You have only 40 years of work to go!
*/

let rlSync = require('readline-sync');

// let currentAge = Number(rlSync.question('What is your age? '));
// let retirementAge;
// do {
//   if (retirementAge) console.log(`Please enter a valid retirement age.`);
//   retirementAge = Number(rlSync.question('At what age would you like to retire? ')) || 1;
// } while (retirementAge < currentAge)

// let yearsLeft = retirementAge - currentAge;

// let currentYear = 2021;

// console.log(`It's ${currentYear}. You will retire in ${currentYear + yearsLeft}.`)
// console.log(`You have only ${yearsLeft} years of work to go!`);

// Further Exploration
const age = parseInt(rlSync.question('What is your age?'), 10);
const retirementAge = parseInt(rlSync.question('At what age would you like to retire?'), 10);

const today = Date(); // excluding new, Date() returns a string representation of the current date and time 
console.log(today);

const currentYear = today.getFullYear();
const workYearsToGo = retirementAge - age;
const retirementYear = currentYear + workYearsToGo;

console.log(`It's ${currentYear}. You will retire in ${retirementYear}.`);
console.log(`You have only ${workYearsToGo} years of work to go!`);