/**
 * @param {number} n
 * @return {number}
 */
const subtractProductAndSum = function (n) {
  const digits = Array.from(String(n), Number);

  const product = digits.reduce((a, b) => a * b);
  const sum = digits.reduce((a, b) => a + b);

  return product - sum;
};
