let array1 = [2, 6, 4];
let array2 = [2, 6, 4];

console.log(array1 === array2);

/*
** The code when logged should return false. Even though the arrays have the same values, they are seperate
** objects, i.e. do not occupy the same space in memory. if we set array2 = array1, then they would both
** reference (point) to the same array object in memory and log true.
*/