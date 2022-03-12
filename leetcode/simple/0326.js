// 326. 3 的幂
// https://leetcode-cn.com/problems/power-of-three/
/**
 * @param {number} n
 * @return {boolean}
 */
// 余数为 0 可以循环，最后 n = 1
// O(x)/O(1)
// 156ms/49.8MB
var isPowerOfThree = function (n) {
  if (!(n & 1)) {
    return false;
  }

  while (n && !(n % 3)) {
    n /= 3;
  }

  if (n === 1) {
    return true;
  }

  return false;
};

// 位运算，在题目给定的 3232 位有符号整数的范围内，最大的 33 的幂为 3^19=1162261467。我们只需要判断 n 是否是 3^19 的约数即可。
// O(1)/O(1)
// 176ms/50.3MB
var isPowerOfThree = function (n) {
  return n > 0 && 1162261467 % n === 0
};

let n = 0;
console.log(isPowerOfThree(n));

n = 27;
console.log(isPowerOfThree(n));

n = 9;
console.log(isPowerOfThree(n));

n = 45;
console.log(isPowerOfThree(n));

for (let i = 0; i < 10; i++) {
  var p = Math.pow(3, i);
  console.log(p, p.toString(2));
}
