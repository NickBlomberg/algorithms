/**
 * @param {number[]} nums
 * @return {number[]}
 */
const smallerNumbersThanCurrent = function (nums) {
  const sorted = Array.from(nums).sort((a, b) => a - b);
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    result.push(sorted.indexOf(nums[i]));
  }

  return result;
};
