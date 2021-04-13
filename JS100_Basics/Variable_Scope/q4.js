function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
  }
}

myFunction();

// The above code will log the value of a (1) to the console. This is because variables declared in outer scope
// can be accessed by any inner scope.