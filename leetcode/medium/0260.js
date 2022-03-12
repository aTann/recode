// 260. 只出现一次的数字 III
// https://leetcode-cn.com/problems/single-number-iii/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// O(n^2)/O(1)
// 112ms/38.7MB
var singleNumber = function (nums) {
  let cache = 0;
  let n = nums.length;
  for (let i = 0; i < n; ++i) {
    cache ^= nums[i];
  }

  for (let i = 0; i < n; ++i) {
    let t = cache ^ nums[i];
    for (let j = i + 1; j < n; j++) {
      if (t === nums[j]) {
        return [nums[i], nums[j]];
      }
    }
  }

  return [];
};

// 全位计算
// O(n)/O(1)
// 72ms/40.9MB
var singleNumber = function (nums) {
  let xorsum = 0;

  for (const num of nums) {
    xorsum ^= num;
  }
  let type1 = 0,
    type2 = 0;

  // 保留最后一个 1，然后在已有的基础上进行 0/1 分流
  const lsb = xorsum & -xorsum;
  for (const num of nums) {
    if (num & lsb) {
      type1 ^= num;
    } else {
      type2 ^= num;
    }
  }
  return [type1, type2];
};

var nums;

nums = [1, 2, 5, 3, 2, 1];
console.log(singleNumber(nums));

nums = [-1, 0];
console.log(singleNumber(nums));

nums = [0, 1];
console.log(singleNumber(nums));
