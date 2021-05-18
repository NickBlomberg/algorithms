/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
const kidsWithCandies = function (candies, extraCandies) {
  return candies.map((kid) => {
    return kid + extraCandies >= Math.max(...candies);
  });
};
