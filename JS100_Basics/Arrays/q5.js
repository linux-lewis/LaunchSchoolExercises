let scores = [96, 47, 113, 89, 100, 102];

let scoresOver99 = scores.filter(score => score >= 100);

console.log(scoresOver99.length);

/* *SOLUTION*
** could also use a for loop:
** let count = 0
** for (let i = 0; i < scores.length; i += 1){
**  if (scores[i] >= 100) {
**    count += 1
**  }  
** }
*/