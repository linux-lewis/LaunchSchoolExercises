let rlSync = require('readline-sync');

let bill = parseFloat(rlSync.question("What is the bill? "));
let tipPercent = parseFloat(rlSync.question("What is the tip percentage? "));

let tipMultipier = (tipPercent / 100);

let tip = (bill * tipMultipier);
let total = (bill + tip);

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);