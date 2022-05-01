/*
Read through the following code. Currently, it does not log the expected result. 
Explain why this happens, then refactor the code so that it works as expected.
*/

// const person = { name: 'Victor' };
// const otherPerson = { name: 'Victor' };

// console.log(person === otherPerson);    // false -- expected: true

/* 
The  code above is comparing two objects to see if they are the same. 
However `person` and `otherPerson` point to two different objects, so when 
compared using the strict equality operator (`===`) they will always return false. 
Instead, we need to compare the name property of the objects if we are expecting a 
value of `true` to be returned. 
Note that using the `==` operator still checks if two objects are the same, and
will still turn `false` if `person == otherPerson` were compared as-is.
*/


const person = { name: 'Victor' };
const otherPerson = { name: 'Victor' };

console.log(person.name === otherPerson.name);    // false -- expected: true
