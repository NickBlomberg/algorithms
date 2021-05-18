/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = function (nums) {
  return nums.reduce((sum, num) => {
    if (sum.length === 0) {
      sum.push(num);
    } else {
      sum.push(num + sum[sum.length - 1]);
    }
    return sum;
  }, []);
};
