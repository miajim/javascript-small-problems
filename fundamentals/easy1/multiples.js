/*
Write a function that computes the sum of all numbers between 1 and some other number, inclusive, that are multiples of 3 or 5.
For instance, if the supplied number is 20, the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

You may assume that the number passed in is an integer greater than 1.
*/

function multisum(max) {
  // let arr = Array.from(Array(max), (_val, idx) => idx + 1);
  let sum = 0;
  for (let num = 1; num <= max; num++) {
    if (num % 3 === 0 || num % 5 === 0) {
      sum += num
    }
  }
  return console.log(sum);
}

multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168