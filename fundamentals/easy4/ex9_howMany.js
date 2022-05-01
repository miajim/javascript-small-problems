/*
Write a function that counts the number of occurrences of each element in a given array. Once counted, log each element alongside the number of occurrences.
*/

function countOccurrences(arr) {
  let vehicleCount = arr.reduce((count, vehicle) => {
    if (count[vehicle]) {
      count[vehicle] += 1;
    } else {
      count[vehicle] = 1;
    }
    return count;
  }, {});
  
  
  for (let vehicle in vehicleCount) {
    console.log(`${vehicle} => ${vehicleCount[vehicle]}`);
  }
}

const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2