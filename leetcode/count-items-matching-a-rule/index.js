/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
const countMatches = function (items, ruleKey, ruleValue) {
  return items.reduce((count, item) => {
    const [type, color, name] = item;
    const itemObject = { type, color, name };

    if (itemObject[ruleKey] === ruleValue) {
      count += 1;
    }

    return count;
  }, 0);
};
