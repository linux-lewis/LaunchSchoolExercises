function clone(obj) {
  return Object.assign({}, obj);
}

let person = {
  title: 'Duke',
  name: {
    value: 'Nukem',
    isStageName: true
  },
  age: 33
};

let clonedPerson = clone(person);
person.age = 34;

console.log(person.age);       // 34
console.log(clonedPerson.age); // 33

person.name.isStageName = false;
console.log(person.name.isStageName);       // false
console.log(clonedPerson.name.isStageName); // false

/*
** Shallow copies using Object.assign creates a copy of the object itself and duplicates primitive values
** objects (including arrays) however, are copied "by reference" which means the pointer to the object is copied.
** What this leads to is changes to primitive values in either the original or the copied object will have 
** no affect on values in the other. But, any changes made to an object contained within the object
** will be reflected in both the original and copy. This is due to both objects pointing to the same nested
** object in memory.
*/