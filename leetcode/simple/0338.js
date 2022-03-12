// 338. 比特位计数
// https://leetcode-cn.com/problems/counting-bits/
/**
 * @param {number} n
 * @return {number[]}
 */
// 逐一计算 1 的个数
// O(n^2)/O(1)
// 84ms/47.3MB
var countBits = function (n) {
  let ans = Array(n).fill(0);

  for (let i = 0; i <= n; i++) {
    let b = i;
    let ones = 0;
    while (b) {
      ones += b & 1;
      b >>= 1;
    }
    ans[i] = ones;
  }

  return ans;
};

// 位计算
// O(n)/O(1)
// 68ms/46.8MB
const M1 = 0b01010101010101010101010101010101;
const M2 = 0b00110011001100110011001100110011;
const M4 = 0b00001111000011110000111100001111;
const M8 = 0b00000000111111110000000011111111;
const M16 = 0b00000000000000001111111111111111;
var countOnes = function (n) {
  let b = n;
  b = (b & M1) + ((b >>> 1) & M1);
  b = (b & M2) + ((b >>> 2) & M2);
  b = (b & M4) + ((b >>> 4) & M4);
  b = (b & M8) + ((b >>> 8) & M8);
  b = (b & M16) + ((b >>> 16) & M16);
  return b;
};
var countBits = function (n) {
  let ans = Array(n).fill(0);

  for (let i = 0; i <= n; i++) {
    ans[i] = countOnes(i);
  }

  return ans;
};

// Brian Kernighan 算法
// O(nlogn)/O(1)
// 88ms/47.4MB
var countBits = function (n) {
  let ans = Array(n).fill(0);

  for (let i = 0; i <= n; i++) {
    let b = i;
    let ones = 0;
    while (b) {
      b &= b - 1;
      ones += 1;
    }
    ans[i] = ones;
  }

  return ans;
};

// 动态规划 - 最高有效位
// O(n)/O(1)
// 96ms/46.8MB
var countBits = function (n) {
  let ans = Array(n + 1).fill(0);
  let f = 1;

  for (let i = 1; i <= n; i++) {
    let pre = i - 1;
    let cur = i;
    if (!(cur & pre)) {
      f = 0;
      ans[i] = 1;
    } else if (!(pre & 1)) {
      f += 1;
      ans[i] = ans[i - 1] + 1;
    } else {
      f += 1;
      // ans[f] 重用前一轮的数据
      ans[i] = ans[f] + 1;
    }
  }
  return ans;
};

// 题解 动态规划 - 最高有效位
// O(n)/O(1)
// 76ms/46.3MB
var countBits = function (n) {
  let ans = Array(n + 1).fill(0);
  let highBit = 0;

  for (let i = 1; i <= n; i++) {
    if (!((i - 1) & i)) {
      highBit = i;
    }
    ans[i] = ans[i - highBit] + 1;
  }
  return ans;
};

// 动态规划 - 最低有效位
// O(n)/O(1)
// 84ms/46.3MB
var countBits = function (n) {
  let ans = Array(n + 1).fill(0);
  
  for (let i = 1; i <= n; i++) {
    ans[i] = ans[i >> 1] + (i & 1);
  }
  return ans;
};

// 动态规划 - 最低设置位
// O(n)/O(1)
// 84ms/46.3MB
var countBits = function (n) {
  let ans = Array(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    ans[i] = ans[i & (i - 1)] + 1;
  }
  return ans;
};

let n = 0;
console.log(countBits(n));

n = 2;
console.log(countBits(n));

n = 5;
console.log(countBits(n));

n = 12;
console.log(countBits(n));

// [0,1,1,2,1,2,2,3,1,2,2,3,3,4,4,5,1]
n = 16;
console.log(countBits(n));
// [0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2, 3, 2, 3, 3, 4, 1];
// [0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2, 3, 2, 3, 3, 4, 1];

n = 100000;
console.log(countBits(n));

// for (let i = 0; i <= 100; i++) {
//   console.log(i.toString(2));
// }

// len(i) - len(i-1)

// 0
// 1
// 10
// 11
// 100
// 101
// 110
// 111
// 1000
// 1001
// 1010
// 1011
// 1100
// 1101
// 1110
// 1111
// 10000
// 10001
// 10010
// 10011
// 10100
// 10101
// 10110
// 10111
// 11000
// 11001
// 11010
// 11011
// 11100
// 11101
// 11110
// 11111
// 100000
// 100001
// 100010
// 100011
// 100100
// 100101
// 100110
// 100111
// 101000
// 101001
// 101010
// 101011
// 101100
// 101101
// 101110
// 101111
// 110000
// 110001
// 110010
// 110011
// 110100
// 110101
// 110110
// 110111
// 111000
// 111001
// 111010
// 111011
// 111100
// 111101
// 111110
// 111111
// 1000000
// 1000001
// 1000010
// 1000011
// 1000100
// 1000101
// 1000110
// 1000111
// 1001000
// 1001001
// 1001010
// 1001011
// 1001100
// 1001101
// 1001110
// 1001111
// 1010000
// 1010001
// 1010010
// 1010011
// 1010100
// 1010101
// 1010110
// 1010111
// 1011000
// 1011001
// 1011010
// 1011011
// 1011100
// 1011101
// 1011110
// 1011111
// 1100000
// 1100001
// 1100010
// 1100011
// 1100100
