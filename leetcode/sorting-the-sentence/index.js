/**
 * @param {string} s
 * @return {string}
 */
const sortSentence = function (s) {
  let result = [];

  s.split(' ').map((word) => {
    const value = word.slice(0, word.length - 1);
    const index = word.slice(word.length - 1, word.length);

    result[index] = value;
  });

  return result.join(' ').trim();
};
