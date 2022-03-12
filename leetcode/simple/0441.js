// 441. 排列硬币
/**
 * @param {number} n
 * @return {number}
 */
// https://leetcode-cn.com/problems/arranging-coins/
// 模拟
// O(logn)/O(1)
// 92ms/42.9MB
var arrangeCoins = function (n) {
  let i = 1;
  for (i = 1; i <= n; i++) {
    n -= i;
  }

  return i - 1;
};

var arrangeCoins = function (n) {
  let i = 1;
  for (i = 1; i <= n; i++) {
    n -= i;
  }

  return i - 1;
};

// O(logn)/O(1)
// 64ms/43.4MB
var arrangeCoins = function (n) {
  const getRow = (m) => (m * (1 + m)) / 2;

  let low = 1;
  let high = n;

  while (low !== high) {
    const mid = low + Math.round((high - low) / 2);
    if (getRow(mid) > n) {
      high = mid - 1;
    } else {
      low = mid;
    }
  }

  return low;
};

// 数学
var arrangeCoins = function (n) {
  return Math.floor((Math.sqrt(8 * n + 1) - 1) / 2);
};

var n = 1;
console.log(arrangeCoins(n));

var n = 2;
console.log(arrangeCoins(n));

var n = 6;
console.log(arrangeCoins(n));

var n = 5;
console.log(arrangeCoins(n));

var n = 8;
console.log(arrangeCoins(n));
