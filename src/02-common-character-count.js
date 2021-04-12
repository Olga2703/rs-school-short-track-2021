/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const arrayS1 = s1.split('');
  const arrayS2 = s2.split('');
  let count = 0;
  const length = (s1.length > s2.length) ? s2.length : s1.length;
  for (let i = 0; i < length; i++) {
    const index = arrayS2.findIndex((item) => (item === arrayS1[i]));
    if (index !== -1) {
      arrayS2.splice(index, 1);
      arrayS1.splice(i, 1);
      count++;
      i--;
    }
  }
  return count;
}

module.exports = getCommonCharacterCount;
