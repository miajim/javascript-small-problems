// function range(start, end) {
//   const range = [];

//   for (let element = start; element <= end; element++) {
//     range.push(element);
//   }

//   return range;
// }

// // range is reassigned to this function definition
// function range(end) {
//   return range(0, end); // recursive call results in an infinite loop
// }

// // Examples

// console.log(range(10, 20));
// console.log(range(5));

// Fixed Code
function range(start, end) {
  if (end === undefined) {
    end = start;
    start = 0;
  }
  
  const range = [];

  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

// range is reassigned to this function definition
// function range(end) {
//   return range(0, end); // recursive call results in an infinite loop
// }

// Examples

console.log(range(10, 20));
console.log(range(5));

/*
Further Exploration
There are two reasons why the following is not a working solution. Can you spot them?
*/

function range(start, end) {
  if (!end) { // if end is any falsy value (e.g., 0) this if conditional branch will execute, not always desired
    start = 0;
    end = start; // end will always be 0 since start is reassigned to 0
  }

  // ...
}