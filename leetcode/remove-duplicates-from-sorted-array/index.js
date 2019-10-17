/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
  if (!nums) return 0;

  for (let i = 0; i < nums.length; i++) {
    while (nums[i] === nums[i + 1]) {
      nums.splice(i + 1, 1);
    }
  }

  return nums.length;
};
