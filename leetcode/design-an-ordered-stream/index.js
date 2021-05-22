/**
 * @param {number} n
 */
const OrderedStream = function (n) {
  this.stream = new Array(n).fill(null);
  this.i = 0;
};

/**
 * @param {number} idKey
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function (idKey, value) {
  this.stream[idKey - 1] = value;

  result = [];
  if (this.i != idKey - 1) return result;

  while (this.i < this.stream.length && this.stream[this.i]) {
    result.push(this.stream[this.i]);
    this.i++;
  }

  return result;
};

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */
