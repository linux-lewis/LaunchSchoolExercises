let obj = {
  num: 42,
  'property name': 'string value',
  true: false,
  fun: function() {
    console.log('Harr Harr!');
  },
};

for (let prop in obj) {
  if (prop === true) {
    console.log("It's true!");
  }
}

/*
** It's true! is never output because we are not accessing the value of the key true, evaluating the
** statement with the boolean true. This value is false and thus the if statement never 
** evaluates to true and logs the phrase.
*/