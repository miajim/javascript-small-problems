/*
The Fibonacci series is a series of numbers (1, 1, 2, 3, 5, 8, 13, 21, ...) such that the first two numbers are 1 by definition, 
and each subsequent number is the sum of the two previous numbers. Fibonacci numbers often appear in mathematics and nature.

Computationally, the Fibonacci series is a simple series, but the results grow at an incredibly rapid rate. 
For example, the 100th Fibonacci number is 354,224,848,179,261,915,075—that's enormous,
especially considering that it takes six iterations just to find the first 2-digit Fibonacci number.

Write a function that calculates and returns the index of the first Fibonacci number that has the number of digits specified by the argument.
(The first Fibonacci number has an index of 1.)

You may assume that the argument is always an integer greater than or equal to 2.

 To use BigInt integers in your solution, simply append the letter n to any numbers you use in your solution: 
 1n, 1234567890123456789012345678901234567890n, and so on. JavaScript will take care of the rest.
*/

// findFibonacciIndexByLength(2n) === 7n;    // 1 1 2 3 5 8 13
// findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
// findFibonacciIndexByLength(10n) === 45n;
// findFibonacciIndexByLength(16n) === 74n;
// findFibonacciIndexByLength(100n) === 476n;
// findFibonacciIndexByLength(1000n) === 4782n;
// findFibonacciIndexByLength(10000n) === 47847n;

// The last example may take a minute or so to run.

/*
Algorithm
- start count at 2
- use a hash to keep track of previously calculated fibonacci numbers
  - keys: nth fibonacci number starting at 1
  - values: actual fibonacci number
- base case: fib[2] = 1, fib[1] = 1
- store each new calculation in the hash (e.g., fib[3] = 2) 
- iterate until the fibonacci number has a length of the argument
*/

function findFibonacciIndexByLength(numDigits, fib = {1: 1n, 2: 1n}) {
  let count = 2;
  let currentFib = fib[count];

  while (String(currentFib).length < numDigits) {
    count += 1;
    fib[count] = fib[count - 1] + fib[count - 2];
    currentFib = fib[count];
  }
  // console.log(fib);
  return console.log(count);
}

findFibonacciIndexByLength(2n) === 7n;    // 1 1 2 3 5 8 13
findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
findFibonacciIndexByLength(10n) === 45n;
findFibonacciIndexByLength(16n) === 74n;
findFibonacciIndexByLength(100n) === 476n;
findFibonacciIndexByLength(1000n) === 4782n;
findFibonacciIndexByLength(10000n) === 47847n;

// The last example may take a minute or so to run.