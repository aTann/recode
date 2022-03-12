// 268. 丢失的数字
// https://leetcode-cn.com/problems/missing-number/
/**
 * @param {number[]} nums
 * @return {number}
 */
// 高斯求和公式
// O(n)/O(1)
// 64ms/43.1MB
var missingNumber = function (nums) {
  let n = nums.length;
  let m = Math.round(n * 0.5 * (n + 1));

  for (let i = 0; i < n; i++) {
    m -= nums[i];
  }

  return m;
};

// 排序
// O(logn)/O(logn)
// 72ms/43.1MB
var missingNumber = function (nums) {
  let n = nums.length;
  nums = nums.sort((p, n) => p - n);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i) {
      return i;
    }
  }
  return n;
};

// 先按顺序放入一个数组，再逐个清点
// O(n)/O(n)
// 72ms/44MB
var missingNumber = function (nums) {
  let n = [];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    n[num] = num;
  }

  let k = 0;
  while (n[k] != null) {
    k += 1;
  }

  return k;
};

// 位运算
// O(n)/O(1)
// 68ms/42.9MB
var missingNumber = function (nums) {
  var n = nums.length;
  var m = n;
  for (let i = 0; i < n; i++) {
    m ^= nums[i] ^ i;
  }

  return m;
};

let nums = [3, 0, 1];
console.log(missingNumber(nums));

nums = [0, 1];
console.log(missingNumber(nums));

nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];
console.log(missingNumber(nums));

nums = [0];
console.log(missingNumber(nums));
