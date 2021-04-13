let a = 1;

function myFunction(a) {
  console.log(a);
}

let b = 2;

myFunction(b);

/*
** The console will log b (2) in this case. The variable b is declared using let with a value of 2 in the outer
** scope of the code, and before it is called in myFunction. The element 'a' within myFunction is not related
** to the variable 'a' declared with let at the beginning and has no affect on this code. 
*/

/* **SOLUTION**
** The above is mostly correct except the reason b is logged when myFunction is called is due to
** variable shadowing where the parameter 'a' in my function shadows the variable 'a', not just that
** they are not related.
*/