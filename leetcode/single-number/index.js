/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function(nums) {
  const seen = [];

  for (let i = 0; i < nums.length; i++) {
    const seenIndex = seen.indexOf(nums[i]);

    seenIndex !== -1 ? seen.splice(seenIndex, 1) : seen.push(nums[i]);
  }

  return seen[0];
};
