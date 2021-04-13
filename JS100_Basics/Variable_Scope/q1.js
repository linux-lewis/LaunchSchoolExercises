console.log(greeting);

var greeting = 'Hello world!';

// The code log Hello world!. Even though the variable greeting is called before it is initailized,
// var declarations are processed before any code is executed. Known as "hoisting"

/* **SOLUTION**
** The above is partially correct. The code will return undefined. This is because the var declaration
** for greeting does hoist the code, but it is initalized with a value of undefined. By assigning
** 'Hello World!' after greeting is called from console.log(), the variable greeting has a value of
** undefined when it is called, similar to below:
*/

var greeting;

console.log(greeting);

var greeting = 'Hello world!';