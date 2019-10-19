/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function(digits) {
  const str = digits.join('');
  const strPlusOne = (BigInt(str) + 1n).toString();

  return Array.from(strPlusOne);
};
