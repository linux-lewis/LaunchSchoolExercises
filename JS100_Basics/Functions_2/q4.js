function calculateBMI(height, weight) {
  return (weight / ((height / 100)**2)).toPrecision(4); 
}

console.log(calculateBMI(180, 80));

/* *SOLUTION*
** The above works for the example but using toPrecision will not always include 2 decimal points
** e.g. 101.39 will become 101.4. To always return a number rounded to a fixed number of decimals
** use .toFixed:

function calculateBMI(heightInCentimeters, weightInKilograms) {
  let heightInMeters = heightInCentimeters / 100;
  let bmi = weightInKilograms / heightInMeters**2;

  return bmi.toFixed(2);
}

*/