let num = 0;

while (num <= 40) {
  if (num % 2 !== 0) {
    console.log(num);
    num += 1;
  } else {
    num += 1;
    continue;
  }
}

//or

let num2 = 1;

while (num2 < 40) {
  console.log(num2);
  num2 += 2;
}