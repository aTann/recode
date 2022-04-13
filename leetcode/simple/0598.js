// 598. 范围求和 II
// https://leetcode-cn.com/problems/range-addition-ii/
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function (m, n, ops) {
  if (!ops.length) {
    return m * n;
  }
  const mn = Array(m)
    .fill(0)
    .map((item) => Array(n).fill(0));

  let max = 0;

  for (const [x, y] of ops) {
    for (let i = 0; i < x; i++) {
      for (let k = 0; k < y; k++) {
        mn[i][k] += 1;
        max = Math.max(max, mn[i][k]);
      }
    }
  }

  let ans = 0;
  for (let i = 0; i < mn.length; i += 1) {
    for (let k = 0; k < mn[i].length; k += 1) {
      if (max === mn[i][k]) {
        ans += 1;
      }
    }
  }

  return ans;
};

// 贪心，维护所有操作的交集
// O(k)/O(1)，k=ops.length
// 56ms/43.1MB
var maxCount = function (m, n, ops) {
  let x = m;
  let y = n;

  for (const [a, b] of ops) {
    x = Math.min(x, a);
    y = Math.min(y, b);
  }

  return x * y;
};

var m = 3,
  n = 3,
  ops = [
    [2, 2],
    [3, 3],
  ];
console.log(maxCount(m, n, ops));

var m = 3,
  n = 3,
  ops = [
    [2, 2],
    [3, 3],
    [3, 3],
    [3, 3],
    [2, 2],
    [3, 3],
    [3, 3],
    [3, 3],
    [2, 2],
    [3, 3],
    [3, 3],
    [3, 3],
  ];
console.log(maxCount(m, n, ops));

var m = 3,
  n = 3,
  ops = [];
console.log(maxCount(m, n, ops));
