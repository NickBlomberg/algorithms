/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
  if (!strs || !strs.length) return '';

  // Ensure the strings are ordered by length
  const strs_sorted = strs.sort((a, b) => a.length - b.length);

  let prefix = strs_sorted[0];

  for (let i = 1; i < strs_sorted.length; i++) {
    for (let char = 0; char < strs_sorted[i].length; char++) {
      // Compare current char with the same position in the
      // current longest prefix
      if (strs_sorted[i][char] !== prefix[char]) {
        prefix = prefix.slice(0, char);
        break;
      }
    }
  }
  return prefix;
};
