let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];

passcode = passcode.join('-');

console.log(passcode);
// Expected return value: '11-jZ5-hQ3f*-8!7g3-p3Fs'

// You can join all elements of an array with no separator using passcode.join('')