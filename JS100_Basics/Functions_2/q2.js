function greet(greeting1 = 'Hello', greeting2 = 'world') { // set two parameters with defaults of 'Hello' and 'world'
  console.log(greeting1 + ', ' + greeting2 + '!'); // log greeting1 and greeting2 with ', ' included between and '!' at end
}

greet();                                // logs: Hello, world!
greet('Salutations');                   // logs: Salutations, world!
greet('Good morning', 'Launch School'); // logs: Good morning, Launch School!


/* *SOLUTION*
** Could also use template literal for greeting:

function greet(greeting = 'Hello', recipient = 'world') {
  console.log(`${greeting}, ${recipient}!`);
}

*/