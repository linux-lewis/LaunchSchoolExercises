let randomNumber = Math.round(Math.random());

if (randomNumber === 1) {
  console.log('Yes!');
} else {
  console.log('No.');
}

// Due to zero (0) being falsy in JS, thhe code can simply be

if (randomNumber) {
  console.log('Yes!');
} else {
  console.log('No.');
}