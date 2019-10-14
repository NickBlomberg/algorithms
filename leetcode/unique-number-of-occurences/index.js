/**
 * @param {number[]} arr
 * @return {boolean}
 */
const uniqueOccurrences = function(arr) {
  const map = new Map();

  for (i in arr) {
    let currentCount = map.get(arr[i]) || 0;
    map.set(arr[i], (currentCount += 1));
  }
  const values = Array.from(map.values());

  return values.length === new Set(values).size;
};
