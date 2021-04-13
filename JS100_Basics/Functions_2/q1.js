function greet(greeting = 'Hello') { // Set greeting = 'Hello' as default
  console.log(greeting + ', world!');
}

greet('Salutations'); // logs: Salutations, world!

greet();              // logs: undefined, world!
                      // should log: Hello, world!

greet(undefined);

// Calling greet(undefined) still logs 'Hello, world!'
