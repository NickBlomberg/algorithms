/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
const restoreString = function (s, indices) {
  const length = indices.length;
  let result = new Array(length).fill('');

  for (let i = 0; i < length; i++) {
    result[indices[i]] = s[i];
  }

  return result.join('');
};
