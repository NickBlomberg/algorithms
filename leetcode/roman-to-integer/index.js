/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function(s) {
  let integerValue = 0;

  const map = new Map();
  map.set('I', 1);
  map.set('V', 5);
  map.set('X', 10);
  map.set('L', 50);
  map.set('C', 100);
  map.set('D', 500);
  map.set('M', 1000);

  for (let i = 0; i < s.length; i++) {
    const isLast = i === s.length - 1;

    if (!isLast && ['I', 'X', 'C'].includes(s[i])) {
      const next = s[i + 1];

      switch (s[i]) {
        case 'I':
          if (next === 'V' || next === 'X') {
            integerValue -= 1;
            continue;
          }
        case 'X':
          if (next === 'L' || next === 'C') {
            integerValue -= 10;
            continue;
          }
        case 'C':
          if (next === 'D' || next === 'M') {
            integerValue -= 100;
            continue;
          }
      }
    }
    integerValue += map.get(s[i]);
  }

  return integerValue;
};
