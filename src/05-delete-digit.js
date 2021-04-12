/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = String(n);
  const arr = str.split('');
  const minNumber = Math.min(...arr);
  const index = arr.findIndex((item) => item === String(minNumber));
  arr.splice(index, 1);
  const result = arr.join('');
  return Number(result);
}
module.exports = deleteDigit;
