// 136. 只出现一次的数字
// https://leetcode-cn.com/problems/single-number/
/**
 * @param {number[]} nums
 * @return {number}
 */

// 位运算
// 同一个数 2 个异或会得到 0，0 和任何一个数异或得到其本身
// O(n)/O(1)
// 76ms/40.2MB
var singleNumber = function (nums) {
  var i = nums.length - 1;
  var t = 0;

  while (i >= 0) {
    t ^= nums[i];
    i -= 1;
  }

  return t;
};

// 1008ms/39.8MB
var singleNumber = function (nums) {
  var t = 0;

  while (nums.length) {
    t ^= nums.shift();
  }

  return t;
};

// Hash 表，散列表
// O(n)/O(n)
// 68ms/44.2MB
var singleNumber = function (nums) {
  var i = nums.length - 1;
  var m = new Map();

  while (i >= 0) {
    if (m.has(nums[i])) {
      m.delete(nums[i]);
    } else {
      m.set(nums[i], 1);
    }

    i -= 1;
  }

  return m.keys().next().value;
};

let nums = [];

nums = [2, 2, 1];
console.log(singleNumber(nums));

nums = [4, 1, 2, 1, 2];
console.log(singleNumber(nums));
