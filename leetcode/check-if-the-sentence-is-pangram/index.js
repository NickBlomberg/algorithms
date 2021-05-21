/**
 * @param {string} sentence
 * @return {boolean}
 */
const checkIfPangram = function (sentence) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';

  sentence.split('').map((letter) => {
    alphabet = alphabet.replace(new RegExp(`${letter}`, 'gi'), '');
  });

  return alphabet.length === 0;
};
