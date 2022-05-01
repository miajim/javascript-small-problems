/*
A triangle is classified as follows:

Equilateral: All three sides are of equal length.
Isosceles: Two sides are of equal length, while the third is different.
Scalene: All three sides are of different lengths.
To be a valid triangle, the sum of the lengths of the two shortest sides must be greater than the length of the longest side, and every side must have a length greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

Write a function that takes the lengths of the three sides of a triangle as arguments and returns one of the following four strings representing the triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'.

Algorithm
- sort the sides of the triangle in ascending order
- check that it is a valid triangle
  - sum of the first two values in the ordered array > last value in the sorted array AND all lengths are > 0
- return 'invalid' if it's invalid otherwise determine the type of triangle it is
- if all 3 sides are equal => return 'equilateral'
- if two sides are equal => return 'isoceles'
- if none of the sides are equal => return 'scalene'
*/

function isValidTriangle(sides) {
  return (sides[0] + sides[1] > sides[sides.length - 1]) && sides.every(side => side > 0);
}

function triangleType(sides) {
  let uniqueSides = [...new Set(sides)]
  switch (uniqueSides.length) {
    case 1: return 'equilateral';
    case 2: return 'isoceles';
    case 3: return 'scalene';
  }
}

function triangle(...args) {
  args = args.sort((a, b) => a - b);
  if (isValidTriangle(args)) {
    return triangleType(args);
  } else { return 'invalid'; }
}


console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"