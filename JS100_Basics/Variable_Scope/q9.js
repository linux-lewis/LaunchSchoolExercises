const a = 1;

function myFunction() {
  a = 2;
}

myFunction(a);

/*
** The above code will throw an error because a is declared using const and is immutable. The error is
** thrown by trying to reassign a on line 4.
*/

/* **SOLUTION**
** The above solution is correct, but to add, passing a into myFunction as an argument has to effect
** because the function does not declare any parameters.
*/