let sale = true;
let admissionPrice = !sale ? 5.25 : 3.99;

console.log('$' + admissionPrice);

// The above code will log $3.99. Sale is set to true and the ternary operator statement is checked using
// the opposite of true, or false. Therefore the statement returns the second value and logs this
// with the dollar sign.