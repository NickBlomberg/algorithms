/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
const countConsistentStrings = function (allowed, words) {
  const numConsistentStrings = words.reduce((count, word) => {
    const letters = word.split('');

    for (let i = 0; i < letters.length; i++) {
      if (!allowed.includes(letters[i])) {
        return count;
      }
    }

    return (count += 1);
  }, 0);

  return numConsistentStrings;
};
