/**
 * @param {string} address
 * @return {string}
 */
const defangIPaddr = function(address) {
  const re = new RegExp('\\.', 'g');
  return address.replace(re, '[.]');
};
