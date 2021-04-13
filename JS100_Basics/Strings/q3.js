const repeat = function (nTimes, string) {
  let fullString = '';
  for (let i = 1; i <= nTimes; i += 1) {
    fullString = fullString + string;
  }
  return fullString;
}

console.log(repeat(3, 'ha')); // 'hahaha'

