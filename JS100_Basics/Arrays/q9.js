let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

function contains(place, destinationArray) {
  let contain = (element) => element === place;
  return destinationArray.some(contain);
}

console.log(contains('Barcelona', destinations)); // true
console.log(contains('Nashville', destinations)); // false

/* **SOLUTION**
** Other solutions to the problem include:

function contains(element, list) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === element) {
      return true;
    }
  }

  return false;
}

** Or

function contains(element, list) {
  return list.indexOf(element) >= 0;
}

*/
