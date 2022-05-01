/*
The concat function from the previous exercise could only concatenate a maximum of two arrays.
For this exercise, you are going to extend that functionality.
Refactor the concat function to allow for the concatenation of two or more arrays or values.
*/
function concat() {
  let firstElement = Array.from(arguments[0]); 
  
  for (let idx = 1; idx < arguments.length; idx++) {
    let currentElement = arguments[idx];
    if (Array.isArray(currentElement)) {
      for (let i = 0; i < currentElement.length; i++) {
        firstElement.push(currentElement[i]);
      }
    } else {
      firstElement.push(currentElement);
    }
  }
  return firstElement;
}

console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat([1, 2], 'a', ['one', 'two']));        // [1, 2, "a", "one", "two"]
console.log(concat([1, 2], ['three'], 4));               // [1, 2, "three", 4]