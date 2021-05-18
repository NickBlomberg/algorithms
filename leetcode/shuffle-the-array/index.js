/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
const shuffle = function (nums, n) {
  const first = nums.slice(0, n);
  const second = nums.slice(n, nums.length);

  let result = [];

  for (let i = 0; i < n; i++) {
    result.push(first[i], second[i]);
  }

  return result;
};
