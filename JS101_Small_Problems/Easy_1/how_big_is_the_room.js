let rlSync = require('readline-sync');
let length = rlSync.question("Enter the length of the room in meters:\n");
let width = rlSync.question("Enter the width of the room in meters:\n");

console.log(`The area of the room is ${length * width} square meters \
(${(length * width) * 10.7639} square feet).`);

// Solution has changes to make more readable. Combining the two gets

const SQMETERS_TO_SQFEET = 10.7639;

let areaInMeters = (length * width);
let areaInFeet = (areaInMeters * SQMETERS_TO_SQFEET);

console.log(
  `The area of the room is ${areaInMeters.toFixed(2)} square meters (${areaInFeet.toFixed(2)} square feet).`
  );



// Further Exploration using rlSync from above
console.log("Enter the input type (meters or feet):");
let units = rlSync.prompt();


console.log(`Enter the length of the room in ${units}:`);
let lngth = rlSync.prompt();
length = parseInt(lngth, 10);

console.log(`Enter the width of the room in ${units}:`);
let wdth = rlSync.prompt();
width = parseInt(wdth, 10);

let area = (lngth * wdth);

console.log(`The area of the room is ${area.toFixed(2)} square ${units}.`);