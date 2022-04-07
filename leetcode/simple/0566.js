// 566. 重塑矩阵
// https://leetcode-cn.com/problems/reshape-the-matrix/
/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
// 模拟，
// O(r*c)/O(r*c)
// 76ms/45.9MB
var matrixReshape = function (mat, r, c) {
  const colLen = mat.length;
  const rowLen = mat[0].length;

  if (colLen * rowLen === r * c) {
    const list = mat.reduce((acc, cur) => acc.concat(cur), []);
    const ans = Array(r);
    for (let i = 0; i < r; i += 1) {
      ans[i] = Array(c);
      for (let j = 0; j < c; j += 1) {
        ans[i][j] = list.shift();
      }
    }

    return ans;
  }

  return mat;
};

// O(r*c)/O(1)
// 76ms/44.6MB
var matrixReshape = function (mat, r, c) {
  const m = mat.length;
  const n = mat[0].length;

  if (m * n !== r * c) {
    return mat;
  }

  const ans = Array(r)
    .fill(1)
    .map((item) => Array(c));

  for (let i = 0; i < m * n; i++) {
    ans[parseInt(i / c, 10)][i % c] = mat[parseInt(i / n, 10)][i % n];
  }

  return ans;
};

var mat = [
    [1, 2],
    [3, 4],
  ],
  r = 1,
  c = 4;
console.log(matrixReshape(mat, r, c));

var mat = [
    [1, 2],
    [3, 4],
  ],
  r = 2,
  c = 4;
console.log(matrixReshape(mat, r, c));
