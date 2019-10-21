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

/**
 * @param {number[]} nums
 * @return {number}
 */
let singleNumberBitwise = function(nums) {
  let unique = nums[0];

  for (let i = 1; i < nums.length; i++) {
    unique ^= nums[i];
  }

  return unique;
};
