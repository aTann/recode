// 118. 杨辉三角
// https://leetcode-cn.com/problems/pascals-triangle/
/**
 * @param {number} numRows
 * @return {number[][]}
 */
// 自顶而下
// O(n^2)/O(n)
// 92ms/37.8MB
var generate = function (numRows) {
  let p = [[1]];
  if (numRows !== 1) {
    for (let i = 1; i < numRows; i++) {
      let n = i + 1;
      let v = Array(n).fill(1);
      // 上一列数据
      let u = p[p.length - 1];
      for (let j = 1; j < n - 1; j++) {
        v[j] = u[j - 1] + u[j];
      }
      p.push(v);
    }
  }

  return p;
};

// 72ms/37.9MB
var generate = function (numRows) {
  let p = [[1]];
  if (numRows !== 1) {
    for (let i = 1; i < numRows; i++) {
      let n = i + 1;

      p[i] = [];
      p[i][0] = p[i][i] = 1;
      for (let j = 1; j < n - 1; j++) {
        p[i][j] = p[i - 1][j - 1] + p[i - 1][j];
      }
    }
  }

  return p;
};

let numRows = 1;

numRows = 1;
console.log(generate(numRows));

numRows = 5;
console.log(generate(numRows));
