/**
 * @param {string} command
 * @return {string}
 */
const interpret = function (command) {
  let parsed = command;
  parsed = parsed.replace(/\(\)/g, 'o');
  parsed = parsed.replace(/\(al\)/g, 'al');

  return parsed;
};
