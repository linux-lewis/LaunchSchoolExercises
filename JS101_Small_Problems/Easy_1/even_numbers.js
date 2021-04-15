for (let num = 2; num < 99; num += 2) {
  console.log(num);
}


// From solution, to iterate over all numbers (inclusive) use if and continue statements

for (let num = 1; num < 100; num += 1) {
  if (num % 2 === 1) {
    continue;
  }
  
  console.log(num);
}
