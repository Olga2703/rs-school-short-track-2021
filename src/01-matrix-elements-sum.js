/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let summ = 0;
  const matrixNew = matrix;
  for (let i = matrix.length - 1; i > 0; i--) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (!matrix[i - 1][j]) {
        matrixNew[i][j] = 0;
      }
    }
  }
  summ = matrixNew.flat().reduce((sum, item) => sum + item, 0);
  return summ;
}

module.exports = getMatrixElementsSum;
