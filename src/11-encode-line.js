/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let count = 0;
  let a = '';
  let resultString = '';
  for (let i = 0; i < str.length; i++) {
    if (a === str[i]) {
      count++;
    } else {
      resultString = resultString.concat(count > 1 ? count : '', a);
      a = str[i];
      count = 1;
    }
  }
  return resultString.concat(count > 1 ? count : '', a);
}

module.exports = encodeLine;
