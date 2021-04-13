console.log(greeting);

let greeting = 'Hello world!';

/*
** The above code will throw an error because the variable greeting is declared after it is called in
** console.log(). This is because variables declared with let, unlike declarations with var, are block
** scope variables (not global), and are not initialized until they are parsed in the code.
*/