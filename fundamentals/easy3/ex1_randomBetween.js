/*
Build a program that randomly generates Teddy's age, and logs it to the console. Have the age be a random number between 20 and 200 (inclusive).

Further Exploration
The randomBetween function used the Math.floor() method. Would it make a difference if the Math.round() method was used instead?

Also, how can we make the function more robust? What if the user inadvertently gave the inputs in reverse order 
(i.e., the value passed to min was greater than max)?
*/


// function getRandomInt(min, max) {
//   // min = Math.ceil(min);
//   // max = Math.floor(max);
//   return Math.floor(Math.random() * (max + 1 - min) + min); // max inclusive
// }

// function randomNumInRange(min, max) {
//   let randomNum = Math.random() * (max - min) + min;
//   return randomNum.toFixed(); // max inclusive
// }

// let age = getRandomInt(10, 12);
// let age2 = randomNumInRange(10, 12);

// console.log(`Teddy is ${age} years old!`);

// Further Exploration
// Using Math.round means you no longer need to add 1 to be max inclusive
// function getRandomInt(min, max) {
//   return Math.round(Math.random() * (max - min) + min); // max inclusive
// }

// let age = getRandomInt(10, 12);

// console.log(`Teddy is ${age} years old!`);

// Make the function more robust
function getRandomInt(num1, num2) {
  let max = num2;
  let min = num1;

  if (num1 > num2) { [max, min] = [num1, num2] };

  return Math.round(Math.random() * (max - min) + min); // max inclusive
}

let age = getRandomInt(12, 10);

console.log(`Teddy is ${age} years old!`);
