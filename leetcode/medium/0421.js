// 421. 数组中两个数的最大异或值
// https://leetcode-cn.com/problems/maximum-xor-of-two-numbers-in-an-array/
/**
 * @param {number[]} nums
 * @return {number}
 */
// 暴力解法，超出时间限制
// O(n^2)
var findMaximumXOR = function (nums) {
  let maxXor = 0;
  for (let i = 0; i < nums.length; i++) {
    const x1 = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      const x2 = nums[j];
      const xor = x1 ^ x2;
      if (xor > maxXor) {
        maxXor = xor;
      }
    }
  }

  return maxXor;
};

// hashMap
// O(nlogC)/O(n)
// 228ms/58.6MB
var findMaximumXOR = function (nums) {
  const HIGH_BIT = 30;
  let x = 0;

  for (let k = HIGH_BIT; k >= 0; k--) {
    const seen = new Set();

    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];

      seen.add(nums[i] >> k);
    }

    // 假设有可能是 1111...111 最大值，如果在检验过程中没有 p_i ^ q_i = 1，那么 1 就不成立，那么就是放置 0
    const xNext = x * 2 + 1; // 0b11
    let found = false;

    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];

      // v = p ^ q =>  p = v ^ q
      if (seen.has(xNext ^ (num >> k))) {
        found = true;
        break;
      }
    }

    if (found) {
      x = xNext;
    } else {
      // 0b11 - 1
      x = xNext - 1;
    }
  }

  return x;
};

// 字典树
var findMaximumXOR = function (nums) {
  
}

var nums;

// 3 ^ 25 = 28
// 0b00011 ^ 0b11001 = 0b11100
nums = [3, 10, 5, 25, 2, 8];
// 00011
// 11001
// 11100
console.log(findMaximumXOR(nums));

// 8 ^ 2 = 10
// 0b1000 ^ 0b0010 = 0b1100
nums = [8, 10, 2];
// 1000
// 0010
// 1100
console.log(findMaximumXOR(nums));

// 91 ^ 36 = 127
// 0b1011011 ^ 0b0100100 = 0b1111111
nums = [14, 70, 53, 83, 49, 91, 36, 80, 92, 51, 66, 70];
// 1011011
// 0100100
// 1111111
console.log(findMaximumXOR(nums));

nums = [2, 4];
console.log(findMaximumXOR(nums));

nums = [1];
console.log(findMaximumXOR(nums));

nums = [14, 15, 9, 3, 2]; // 13
console.log(findMaximumXOR(nums));

// const bit = (b) => b.toString(2)
// [14,70,53,83,49,91,36,80,92,51,66,70].forEach(i => {let b = i.toString(2); console.log(''.padStart(8 - b.length) + b);})
// const xor = (a, b) => parseInt(a, 2) ^ parseInt(b, 2)
// const xorSum = (list) => list.reduce((a, c) => a ^ c, 0)
// const orSum = (list) => list.reduce((a, c) => a | c, 0)
