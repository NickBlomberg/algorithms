/**
 * @param {number} num
 * @return {number}
 */
const numberOfSteps = function (num) {
  let result = 0;
  while (true) {
    if (num === 0) {
      return result;
    }

    num % 2 === 0 ? (num /= 2) : (num -= 1);

    result++;
  }
};
