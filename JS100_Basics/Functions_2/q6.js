function removeLastChar(string) {
  let chars = string.split('');
  chars.pop()
  return chars.join('');
}

removeLastChar('ciao!'); // 'ciao'
removeLastChar('hello'); // 'hell'

console.log(removeLastChar('ciao!'));
console.log(removeLastChar('hello'));

/* *SOLUTION*

** Can also use string.substring():

function removeLastChar(string) {
  return string.substring(0, string.length - 1);  // Takes start and 
}

*/