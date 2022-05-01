/*
What does the following code log? Why is this so?
*/

let startingBalance = 1;
const chicken = 5;
const chickenQuantity = 7;

function totalPayable(item, quantity) {
  return startingBalance + (item * quantity);
}

startingBalance = 5;
console.log(totalPayable(chicken, chickenQuantity));

startingBalance = 10;
console.log(totalPayable(chicken, chickenQuantity));

// hoisted

// function totalPayable(item, quantity) {
//   return startingBalance + (item * quantity);
// }

// let startingBalance;
// const chicken; 
// const chickenQuantity;

// startingBalance = 1;
// chicken = 5;
// chickenQuantity = 7;

// startingBalance = 5;
// console.log(totalPayable(chicken, chickenQuantity)); // 5 + (5 * 7) = 40

// startingBalance = 10;
// console.log(totalPayable(chicken, chickenQuantity)); // 10 + (5 * 7) = 45