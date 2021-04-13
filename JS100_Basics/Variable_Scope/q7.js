let a = 1;

function myFunction() {
  console.log(a);
}

myFunction();

/*
** In this case the console will log the value of a (1). Since a is declared in the outer scope, it 
** is able to be accessed by console.log() within myFunction.
*/