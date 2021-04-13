let a = 5;
let b = false;

if (a > 4) {
  let b = true;
}

console.log(b);

/*
** In this case the console will log false. This is similar to q5 and q3. b is declared twice but is still
** two seperate variables (like q5). But, similar to q3, this value is not returned to the outer scope,
** and unable to be accessed by the console.log() function which instead logs the value of b from the outer scope.
*/