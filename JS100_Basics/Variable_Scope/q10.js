const a = {
  firstName: 'John',
  lastName: 'Doe'
};

function myFunction() {
  a.firstName = 'Jane';
}

myFunction();

console.log(a);

/*
** The above code will log {firstName: 'Jane', lastName: 'Doe'}. Even though the object a is declared with
** const, the properties and property values are still able to be modified. The only thing that can't be
** changed is what the object refers to (such as a new object or value).
*/