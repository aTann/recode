// 342. 4的幂
// https://leetcode-cn.com/problems/power-of-four/
/**
 * @param {number} n
 * @return {boolean}
 */
// 逐除法
// O(k)/O(1)
// 72ms/41.5MB
var isPowerOfFour = function (n) {
  while (n && !(n % 4)) {
    n /= 4;
  }
  if (n === 1) {
    return true;
  }

  return false;
};

// 利用移位
// O(logBit)/O(1)
// 60ms/41.4MB
var isPowerOfFour = function (n) {
  while (n > 1 && !(n & (n - 1))) {
    n >>= 2;
  }

  if (n === 1) {
    return true;
  }

  return false;
};

//n > 0 情况下，n & (n-1) = 0，然后位数是单数的
// mask = 0b10101010101010101010101010101010
// mask = 0xaaaaaaaa
// O(1)/O(1)
var isPowerOfFour = function (n) {
  return n > 0 && !(n & (n - 1)) && !(n & 0xaaaaaaaa);
};

// mod(3) = 1
var isPowerOfFour = function (n) {
  return n > 0 && !(n & (n - 1)) && n % 3 === 1;
};

let n = 16;
console.log(isPowerOfFour(n));

n = 5;
console.log(isPowerOfFour(n));

n = 1;
console.log(isPowerOfFour(n));

n = 32;
console.log(isPowerOfFour(n));

// for (let i = 0; i < 10; i++) {
//   console.log((4**i).toString(2), 4**i);
// }
