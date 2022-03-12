// 263. 丑数
// https://leetcode-cn.com/problems/ugly-number/
/**
 * @param {number} n
 * @return {boolean}
 */
// 逐次遍历 2/3/5
// O(logn)/O(1)
// 64ms/41.7MB
var isUgly = function (n) {
  if (n < 1) {
    return false;
  }

  while (n % 2 === 0) {
    n /= 2;
  }

  while (n % 3 === 0) {
    n /= 3;
  }

  while (n % 5 === 0) {
    n /= 5;
  }

  return n === 1;
};

// 题解
// O(logn)/O(1)
// 68ms/42.7MB
var isUgly = function (n) {
  if (n <= 0) {
    return false;
  }
  const factors = [2, 3, 5];
  for (const factor of factors) {
    while (n % factor === 0) {
      n /= factor;
    }
  }
  return n == 1;
};

let n = 0;
console.log(isUgly(n));

n = 6;
console.log(isUgly(n));

n = 8;
console.log(isUgly(n));

n = 14;
console.log(isUgly(n));

n = 1;
console.log(isUgly(n));

// 复杂度分析
// 时间复杂度：O(logn)。时间复杂度取决于对 n 除以 2, 3, 5 的次数，由于每次至少将 n 除以 2 ，因此算法运算的次数不会超过 O(logn)
// 空间复杂度：O(1)
