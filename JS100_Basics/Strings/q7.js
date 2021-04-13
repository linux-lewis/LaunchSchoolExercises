const isBlank = function(string) {
  if (string.length === 0) {
    return true;
  }
  return false;
}

isBlank('mars'); // false
isBlank('  ');   // false
isBlank('');     // true

console.log(isBlank('mars'));
console.log(isBlank('  '));
console.log(isBlank(''));

/* **SOLUTION**
** Simpler code given in solution
** function isBlank(string){
**   return string.length === 0
** }
*/