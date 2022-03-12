// 1. 两数之和
// https://leetcode-cn.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 双指针，两头向中间合拢
var twoSum = function (nums, target) {
  const len = nums.length;
  for (let left = 0; left < len; left++) {
    const top = nums[left];
    for (let right = len - 1; right > left; right--) {
      const foot = nums[right]
      const res = top + foot;
      if (res === target) {
        return [left, right]
      }
    }
  }
};

// hashmap
var twoSum2 = function (nums, target) {
  const len = nums.length;
  const map = {}
  for (let idx = 0; idx < len; idx++) {
    const c = nums[idx];
    const r = (target - c).toString();
    
    if (map[r] != null) {
      return [map[r], idx]
    }
    map[c] = idx;
  }
};

var r = twoSum2([-3,4,3,90], 0)
console.log(r);
