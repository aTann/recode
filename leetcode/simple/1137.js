// 1137. 第 N 个泰波那契数
// https://leetcode-cn.com/problems/n-th-tribonacci-number/
/**
 * @param {number} n
 * @return {number}
 */
// 动态规划 + 滑动窗口
// O(n)/O(1)
// 56ms/40.9MB
var tribonacci = function (n) {
  let t0 = 0,
    t1 = 1,
    t2 = 1;

  if (n === 0) {
    t2 = 0;
  }

  for (let i = 3; i <= n; i++) {
    var t3 = t0 + t1 + t2;
    [t0, t1, t2] = [t1, t2, t3];
  }

  return t2;
};

// 数组存储
// O(n)/O(1)
// 60ms/41MB
var tribonacci = function (n) {
  let t = [0, 1, 1];

  for (let i = 3; i <= n; i++) {
    t[i] = t[i - 1] + t[i - 2] + t[i - 3];
  }

  return t[n];
};

let n = 4;
console.log(tribonacci(n));

n = 25;
console.log(tribonacci(n));
