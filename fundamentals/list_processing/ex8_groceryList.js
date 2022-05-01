/*
Write a function that takes a grocery list in a two-dimensional array 
and returns a one-dimensional array. Each element in the grocery list
 contains a fruit name and a number that represents the desired quantity 
 \of that fruit. The output array is such that each fruit name appears 
 the number of times equal to its desired quantity.

In the example below, we want to buy 3 apples, 1 orange, and 2 bananas. 
Thus, we return an array that contains 3 apples, 1 orange, and 2 bananas.
*/
function buyFruit(arr) {
  return arr.flatMap((subarr) => {
    let newSubarr = [];
    for (let i = 0; i < subarr[1]; i += 1) {
      newSubarr.push(subarr[0]);
    }
    return newSubarr;
  });
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]