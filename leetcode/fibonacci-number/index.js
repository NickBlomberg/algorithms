/**
 * @param {number} N
 * @return {number}
 */
let fib = function(N) {
  if (N === 0) {
    return 0;
  }

  const fibs = [0, 1];

  for (let i = 2; i < N; i++) {
    const newFib = fibs[fibs.length - 1] + fibs[fibs.length - 2];
    fibs.push(newFib);
  }

  return fibs[fibs.length - 1] + fibs[fibs.length - 2];
};
