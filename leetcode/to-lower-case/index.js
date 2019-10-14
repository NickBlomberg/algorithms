/**
 * @param {string} str
 * @return {string}
 */
const toLowerCase = function(str) {
  const lowestUpperCaseUnicode = 65;
  const highestUpperCaseUnicode = 90;
  const lowerCaseOffset = 32;
  let result = '';

  for (let i = 0; i < str.length; i++) {
    let nextChar = str.charAt(i);
    const nextCharCode = str.charCodeAt(i);

    // Check if unicode valu falls within upper case range
    if (
      nextCharCode >= lowestUpperCaseUnicode &&
      nextCharCode <= highestUpperCaseUnicode
    ) {
      nextChar = String.fromCharCode(nextCharCode + lowerCaseOffset);
    }
    result = result.concat(nextChar);
  }
  return result;
};
