// 190. 颠倒二进制位
// https://leetcode-cn.com/problems/reverse-bits/

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
// 分治
// O(logn)/O(logn)
// 76ms/39.4MB

var reverseBits = function (n) {
  let bit = "".padStart(32, 0) + n.toString(2);
  return parseInt(reverse(bit.slice(-32)), 2);
};

var reverse = function (n) {
  if (n.length === 1) {
    return n;
  }

  return (
    reverse(n.slice(n.length >> 1, n.length)) +
    reverse(n.slice(0, n.length >> 1))
  );
};

// 位运算，逐位颠倒
// O(logn)/O(1)
// 88ms/39.4MB
var reverseBits = function (n) {
  let rev = 0;

  for (let i = 0; i < 32, n > 0; i++) {
    // n & 1 实现只有最后一位可用
    rev |= (n & 1) << (31 - i);
    // 将已经颠倒的位移除
    n >>>= 1;
  }

  return rev >>> 0;
};

// 位运算分治
// O(1)/O(1)
// 80ms/39.5MB
const M1 = 0x55555555; // 01010101010101010101010101010101
const M2 = 0x33333333; // 00110011001100110011001100110011
const M4 = 0x0f0f0f0f; // 00001111000011110000111100001111
const M8 = 0x00ff00ff; // 00000000111111110000000011111111

var reverseBits = function (n) {
  n = ((n >>> 1) & M1) | ((n & M1) << 1);
  n = ((n >>> 2) & M2) | ((n & M2) << 2);
  n = ((n >>> 4) & M4) | ((n & M4) << 4);
  n = ((n >>> 8) & M8) | ((n & M8) << 8);
  return ((n >>> 16) | (n << 16)) >>> 0;
};

let n = 0;
n = 0b00000010100101000001111010011100;
console.log(reverseBits(n));
