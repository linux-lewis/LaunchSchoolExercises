function multiplesOfThree() {
  let divisor = 1;

  for (let dividend = 3; dividend <= 30; dividend += 3) {
    console.log(dividend + ' / ' + divisor + ' = 3');
    divisor += 1;
  }
}

multiplesOfThree;

// The above code will log nothing to the console because multiplesOfThree is being called without ()
// to invoke the function you must call multiplesOfThree()

multiplesOfThree();

// The ouput will now be multiples of 3 divided by an incrementing divisor showing they are equal to 3
// e.g. 12 / 4 = 3