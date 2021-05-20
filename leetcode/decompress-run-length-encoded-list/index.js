/**
 * @param {number[]} nums
 * @return {number[]}
 */
const decompressRLElist = function (nums) {
  const decompressed = [];

  for (let i = 0; i < nums.length; i += 2) {
    const freq = nums[i];
    const val = nums[i + 1];

    for (let j = 0; j < freq; j++) {
      decompressed.push(val);
    }
  }

  return decompressed;
};
