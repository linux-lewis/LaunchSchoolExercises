let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

// Your code.
for (let i = 0; i < groceryList.length;) {
  console.log(groceryList[i]);
  groceryList.shift();
}
// logs:
// paprika
// tofu
// garlic
// quinoa
// carrots
// broccoli
// hummus

console.log(groceryList); // []

/* *SOlUTION*
** Can also be done using a while loop:

while (groceryList.length > 0) {
  let checkedItem = groceryList.shift();

  console.log(checkedItem);
}

*/