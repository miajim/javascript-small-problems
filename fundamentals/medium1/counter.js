// code snippet 1
// var counter = 5;
// var rate = 3;
// console.log('The total value is ' + String(counter * rate));

// function counter(count) {
//   // ...
// }

// hoisted version
// function counter(count) {
//   // ...
// }

// var counter = undefined; // counter variable is overridden by var
// var rate = undefined;

// counter = 5;
// rate = 3;

// console.log('The total value is ' + String(counter * rate));
// This will output the string: 'The total value is 15'.


/* ********************************************************** */

// code snippet 2
// function counter(count) {
//   // ...
// }

// console.log('The total value is  ' + String(counter * rate));

// var counter = 5;
// var rate = 3;

// hoisted version
// function counter(count) {
//   // ...
// }

// var counter = undefined;
// var rate = undefined;

// console.log('The total value is  ' + String(counter * rate));

// counter = 5;
// rate = 3;

// This will output the string 'The total value is  NaN'.

/* ********************************************************** */
// code snippet 3
// var counter = 5;
// var rate = 3;

// function counter(count) {
//   // ...
// }

// console.log('The total value is ' + String(counter * rate));

// hoisted version
// function counter(count) {
//   // ...
// }

// var counter = undefined;
// var rate = undefined;

// counter = 5;
// rate = 3;

// console.log('The total value is ' + String(counter * rate));
// This will output the string: 'The total value is 15'.

/* ********************************************************** */
// code snippet 4
// let counter = 5;
// let rate = 3;

// function counter(count) {
//   // ...
// }

// console.log('The total value is ' + String(counter * rate));

// hoisted version
// Before any hoisting occurs, the code is scanned for Syntax Errors
// Since counter is already declared using `let`, `function counter()` can't also carry the same name. 
// A SyntaxErorr will be thrown before any code is hoisted or executed.