let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
  greet: function(person) {
    console.log(`Hej, ${person}!`);
  }
};

jane.greet('Bobby'); // Hej, Bobby!
