/*
Write a function that takes a string argument consisting of a first name, a space, and a last name, and returns a new string consisting of the last name, a comma, a space, and the first name.


*/

// function swapName(str) {
//   return str.split(' ').reverse().join(', ');
// }

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"
console.log(swapName('Maria Buitron Jimenez')) // "Jimenez, Maria Buitron"
// Further Exploration
/* What if the person had more than one first name? Refactor the current solution so that it can accommodate this. */ 

function swapName(str){
  let name = str.split(' ');
  return `${name.slice(-1)[0]}, ${name.slice(0, -1).join(' ')}`;
}