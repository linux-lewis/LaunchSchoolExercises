if (true) {
  let myValue = 20;
}

console.log(myValue);

/*
** The above code will throw a ReferenceError because myValue is declared within the code block of the
** if statement but not returned. Therefore there is no reference myValue for console.log() to access.
*/