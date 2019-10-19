/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function(s) {
  if (!s) return 0;

  const words = s.trim().split(' ');

  return words[words.length - 1].length;
};
