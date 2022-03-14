// 461. 汉明距离
// https://leetcode-cn.com/problems/hamming-distance/
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
// 异或，统计 1 的个数

// Brian Kernighan 算法，f(x) = x&(x-1)，可以除去最右侧的 1
// O(|S|)/O(1)，S = 31
// 60ms/41MB
var hammingDistance = function (x, y) {
  let k = x ^ y;
  let ans = 0;
  while (k) {
    k = k & (k - 1);
    ans += 1;
  }
  return ans;
};

// O(|S|)/O(1)
// 68ms/41.1MB
var hammingDistance = function (x, y) {
  let k = x ^ y;
  let ans = 0;
  while (k) {
    ans += k & 1;
    k >>= 1;
  }
  return ans;
};

// 异或，统计 1 位数
// O(1)/O(1)
// 52ms/41MB
const M1 = 0x55555555;
const M2 = 0x33333333;
const M4 = 0x0f0f0f0f;
const M8 = 0x00ff00ff;
const M16 = 0x0000ffff;

var countOnes = (k) => {
  k = (k & M1) + ((k >> 1) & M1);
  k = (k & M2) + ((k >> 2) & M2);
  k = (k & M4) + ((k >> 4) & M4);
  k = (k & M8) + ((k >> 8) & M8);
  k = (k & M16) + ((k >> 16) & M16);

  return k;
};
var hammingDistance = function (x, y) {
  return countOnes(x ^ y);
};


var x = 1,
  y = 4;
console.log(hammingDistance(x, y));

var x = 3,
  y = 1;
console.log(hammingDistance(x, y));
