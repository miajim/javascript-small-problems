/*
Write a function that takes a positive integer, n, as an argument and logs a right triangle whose sides each have n stars. 
The hypotenuse of the triangle (the diagonal side in the images below) should have one end at the lower-left of the triangle,
and the other end at the upper-right.

Algorithm
- iterate from 1 to n inclusive
- pad the start of the string with n - 1 spaces
- log the padded string to the console
*/

function triangle(n) {
  let str = '';
  for (let i = 1; i <= n; i++) {
    str += '*';
    console.log(str.padStart(n));
  }
}

triangle(5);

//     *
//    **
//   ***
//  ****
// *****

triangle(9);

//         *
//        **
//       ***
//      ****
//     *****
//    ******
//   *******
//  ********
// *********