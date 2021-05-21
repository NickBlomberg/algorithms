/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
const createTargetArray = function (nums, index) {
  let target = [];

  for (let i = 0; i < nums.length; i++) {
    const val = nums[i];
    const position = index[i];

    target.splice(position, 0, val);
  }

  return target;
};
