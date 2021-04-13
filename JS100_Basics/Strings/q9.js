let string = 'launch school tech & talk'
let words = string.split(' ');
let capitalWords = []

for (let i = 0; i < words.length; i += 1) {
  let word = words[i];
  capitalWords.push(word[0].toUpperCase() + word.slice(1));
}

console.log(capitalWords.join(' '));