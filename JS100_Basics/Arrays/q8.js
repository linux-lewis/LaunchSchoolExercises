function filter(input) {
  return Array.isArray(input);// Is input an array?
}

console.log(filter([1, 2, 3])); // true
console.log(filter(3.14)); // false