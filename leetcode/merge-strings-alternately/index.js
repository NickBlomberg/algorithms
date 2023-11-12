/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const mergeAlternately = function (word1, word2) {
  let result = [];

  const maxWordLength = Math.max(word1.length, word2.length);

  for (let i = 0; i < maxWordLength; i++) {
    if (word1[i]) result.push(word1[i]);
    if (word2[i]) result.push(word2[i]);
  }

  return result.join('');
};
