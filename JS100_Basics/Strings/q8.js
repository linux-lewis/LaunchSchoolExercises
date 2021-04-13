const isBlank = function(string) {
  return string.trim().length === 0;
}

isBlank('mars'); // false
isBlank('  ');   // true
isBlank('');     // true

console.log(isBlank('mars'));
console.log(isBlank('  '));
console.log(isBlank(''));