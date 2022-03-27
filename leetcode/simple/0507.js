// 507. 完美数
// https://leetcode-cn.com/problems/perfect-number/
/**
 * @param {number} num
 * @return {boolean}
 */

// 先求因子，再相加
// O(n)/O(n)
// 1258ms/40.9MB
var checkPerfectNumber = function (num) {
  const set = new Set();

  num !== 1 && set.add(1);

  for (let div = 2; div <= num >> 1; div++) {
    if (num % div === 0) {
      set.add(div);
    }
  }

  const sum = Array.from(set).reduce((acc, cur) => (acc += cur), 0);

  return num === sum;
};

// O(n)/O(1)
// 1156ms/41.1MB
var checkPerfectNumber = function (num) {
  let sum = 0;

  for (let div = 1; div <= num >> 1; div++) {
    if (num % div === 0) {
      sum += div;
      // 1096ms/40.9MB
      if (sum > num) {
        return false;
      }
    }
  }

  return num === sum;
};

// 逐除法求出因子，然后遍历因子
// O(logn)/O(|n>>1|)
// 276ms/41.2MB
var checkPerfectNumber = function (num) {
  let sum = 0;

  let factors = [];
  let factor = 2;
  let m = num;

  while (factor !== 1 && factor <= m >> 1) {
    if (m % factor === 0) {
      factors.push(factor);
      m /= factor;
    } else {
      factor += 1;
    }
  }

  if (factors.length) {
    factors.push(m);
    factors.reduce((acc, cur) => {
      acc *= cur;
      sum += acc;
      sum += num / acc;
      return acc;
    }, 1);
  }

  return num === sum - num;
};

// 题解
// 数学，欧几里得-欧拉定理，每个偶完全数都可以写成
// (2**(p - 1))(2**p - 1)
// p 为素数且 2**p - 1 为素数
// 题目范围 [1,10^8]内的完全数，一共有 5 个：
// 6,28,496,8128,33550336
// O(1)/O(1)
// 52ms/40.9MB
var checkPerfectNumber = (num) =>
  num === 6 || num === 28 || num === 496 || num === 8128 || num === 33550336;

var num = 1;
console.log(checkPerfectNumber(num));

var num = 28;
console.log(checkPerfectNumber(num));

var num = 7;
console.log(checkPerfectNumber(num));
