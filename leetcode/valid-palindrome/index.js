/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function(s) {
  if (s === '') return true;

  const sClean = s.toLowerCase().replace(/[^a-z0-9]/g, '');

  return (
    sClean ===
    sClean
      .split('')
      .reverse()
      .join('')
  );
};
