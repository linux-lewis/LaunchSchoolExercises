function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
    let a = 2;
    console.log(a);
  }
}

myFunction();

/*
** The above code will log the value of a (1) and then throw an error. This is due to a already being initialized
** in the outer scope by using let. The second let statement attempts to initialize a variable which has
** been defined and will throw an error.
*/

/* **SOLUTION**
** The above answer is close but instead a ReferenceError will be thrown because variables that are initialized
** with let aren't available until the code runs. Let variables are hoisted like var, but instead are 
** created with a "temporal dead zone" meaning that the variable exists but does not have a value, even undefined.
** so the initial let a = 1 initializes a with a value of 1, but this is shadowed by the second let a = 2
** statement leaving 'a' without a value until line 6. This ReferenceError is thrown because a is called on line 
** 5 before it is given a value on like 6. Think of this in terms of stack: there are two variables which are named
** 'a' but the one called later is stacked on top of the first before the code is ran. So a = (nothing) is accessed before
** a = 1 in the if statement.
*/