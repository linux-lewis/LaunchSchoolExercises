const nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

const person = Object.fromEntries(nestedArray);
console.log(person);
// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }

/*
** This should work from the documentation but Object.fromEntries does not show as a function.
** Example from solution below

let person = {};

for (let i = 0; i < nestedArray.length; i++) {
  let pair = nestedArray[i];

  person[pair[0]] = pair[1];
}

console.log(person);
// { title: 'Duke', name: 'Nukem', age: 33 }

*/