for (let i = 1; i < 100; i += 2) {
  console.log(i);
}

// Further Exploration

function oddNumbers(min, max) {
  for (let i = min; i <= max; i += 1) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}


oddNumbers(1, 20);