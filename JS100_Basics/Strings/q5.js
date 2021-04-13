let string1 = 'Polar Bear';
let string2 = 'Polar bear';
let string3 = 'Penguin';

function compareString (str1, str2) {
  if (str1.toUpperCase() === str2.toUpperCase()) {
    return true;
  }
  return false
}

console.log(compareString(string1, string2));
console.log(compareString(string1, string3));
console.log(compareString(string2, string3));