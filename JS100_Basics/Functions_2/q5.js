function catAge(humanAge) {
  if (humanAge <= 0) {
    return 0;

  } else if (humanAge === 1) {
    return 15;

  } else if (humanAge === 2) {
    return 24

  } else {
    return 24 + (4 * (humanAge - 2));

  }
}

catAge(0); // 0
catAge(1); // 15
catAge(2); // 24
catAge(3); // 28
catAge(4); // 32

console.log(catAge(0));
console.log(catAge(1));
console.log(catAge(2));
console.log(catAge(3));
console.log(catAge(4));

/* *SOLUTION*
** Could also be completed using switch:

function catAge(humanYears) {
  switch(humanYears) {
    case 0:
      return 0;
    case 1:
      return 15;
    case 2:
      return 24;
    default:
      return 24 + (humanYears - 2) * 4;
  }
}

*/