let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];

energy.shift();
energy.push('geothermal');
console.log(energy);

/* **SOLUTION**
** can also remove 'fossil' from array using:
** energy = energy.slice(1);
** or
** energy.splice(0,1) which removes 1 element starting at index 0
*/