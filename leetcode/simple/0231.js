// 231. 2 的幂
// https://leetcode-cn.com/problems/power-of-two/
/**
 * @param {number} n
 * @return {boolean}
 */
// 数学方式
// O(k)/O(1)   2**k <= n
// 88ms/39.3MB
var isPowerOfTwo = function (n) {
  while (n && !(n % 2)) {
    n /= 2;
    if (n === 1) {
      return true;
    }
  }

  return n === 1;
};

// 位运算
// 二次幂有 n & (n-1) === 0
// O(1)/O(1)
// 76ms/39.9MB
var isPowerOfTwo = function (n) {
  return n > 0 && !(n & (n - 1));
};

// 位运算
// 二次幂有，n & -n = n，其他数据 n & -n === 1
// O(1)/O(1)
// 84ms/39.1MB
var isPowerOfTwo = function (n) {
  return n > 0 && (n & -n) === n;
};

// 判断是否为最大 2 的幂的约数
var isPowerOfTwo = function (n) {
  const BIG = 1 << 30;
  return n > 0 && BIG % n === 0;
};

let n = 0;
console.log(isPowerOfTwo(n));

n = 1;
console.log(isPowerOfTwo(n));

n = 16;
console.log(isPowerOfTwo(n));

n = 3;
console.log(isPowerOfTwo(n));

n = 4;
console.log(isPowerOfTwo(n));

n = 5;
console.log(isPowerOfTwo(n));
