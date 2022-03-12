// 191. 位1的个数
// https://leetcode-cn.com/problems/number-of-1-bits/
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
// 位运算
// O(logn)/O(1)
// 84ms/39.3MB
// [位运算简介及实用技巧（二）：进阶篇(1)](http://www.matrix67.com/blog/archives/264)
var hammingWeight = function (n) {
  const M1 = 0x55555555; // 01010101010101010101010101010101
  const M2 = 0x33333333; // 00110011001100110011001100110011
  const M4 = 0x0f0f0f0f; // 00001111000011110000111100001111
  const M8 = 0x00ff00ff; // 00000000111111110000000011111111
  const M16 = 0x0000ffff; // 00000000000000001111111111111111

  n = (n & M1) + ((n >>> 1) & M1);
  n = (n & M2) + ((n >>> 2) & M2);
  n = (n & M4) + ((n >>> 4) & M4);
  n = (n & M8) + ((n >>> 8) & M8);
  n = (n & M16) + ((n >>> 16) & M16);

  return n >>> 0;
};

// 逐位计算
// O(k)/O(1)，k = 32
// 68ms/39.2MB
var hammingWeight = function (n) {
  let ret = 0;
  for (let i = 0; i < 32; i++) {
    ret += n & 1;
    n >>>= 1;
  }
  return ret;
};
// 题解
// O(k)/O(1)，k = 32
// 80ms/39.2MB
var hammingWeight = function (n) {
  let ret = 0;
  for (let i = 0; i < 32; i++) {
    if (n & (1 << i)) {
      ret += 1;
    }
  }
  return ret;
};

// n & n-1，将最低位的 1 逐个消除
// O(logn)/O(1)
// 76ms/39.2MB
var hammingWeight = function (n) {
  let ret = 0;

  while (n) {
    n = n & (n - 1);
    ret += 1;
  }

  return ret;
};

// 211
// 00000000000000000000000011010011
// 01010101010101010101010101010101
// 00000000000000000000000001010001

// 00000000000000000000000001101001
// 01010101010101010101010101010101
// 00000000000000000000000001000001

// 00000000000000000000000001010001
// 00000000000000000000000001000001
// 00000000000000000000000010010010

let n = 1;

n = 0b00000000000000000000000011010011; // 211
console.log(hammingWeight(n));

n = 0b00000000000000000000000010000000;
console.log(hammingWeight(n));

n = 0b11111111111111111111111111111101;
console.log(hammingWeight(n));
