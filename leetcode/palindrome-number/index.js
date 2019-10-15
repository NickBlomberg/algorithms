/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
  return (
    parseInt(
      new String(x)
        .split('')
        .reverse()
        .join('')
    ) === x
  );
};
