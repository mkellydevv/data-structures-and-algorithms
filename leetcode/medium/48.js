// https://leetcode.com/problems/rotate-image/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (mat) {
  let rowStart = 0;
  let rowEnd = mat.length - 1;

  let colStart = 0;
  let colEnd = mat.length - 1;

  while (rowStart < rowEnd) {
    for (let i = 0; i < rowEnd - rowStart; i++) {
      const tmp = mat[rowStart][colStart + i];

      mat[rowStart][colStart + i] = mat[rowEnd - i][colStart];
      mat[rowEnd - i][colStart] = mat[rowEnd][colEnd - i];
      mat[rowEnd][colEnd - i] = mat[rowStart + i][colEnd];
      mat[rowStart + i][colEnd] = tmp;
    }

    rowStart++;
    rowEnd--;

    colStart++;
    colEnd--;
  }
};
