// 219. 存在重复元素 II
// https://leetcode-cn.com/problems/contains-duplicate-ii/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// 迭代
// O(n * k)/O(1)
// 5012ms/46.6MB
var containsNearbyDuplicate = function (nums, k) {
  let len = nums.length;

  for (let i = 0; i < len; i++) {
    const n = nums[i];
    for (let j = i + 1; j <= i + k; j++) {
      const m = nums[j];
      if (n === m) {
        return true;
      }
    }
  }

  return false;
};

// HashMap
// O(n)/O(n)
// 100ms/58.4MB
var containsNearbyDuplicate = function (nums, k) {
  let map = new Map();
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    if (map.has(nums[i]) && i - map.get(nums[i]) <= k) {
      return true;
    }
    map.set(nums[i], i);
  }

  return false;
};

// 题解
// 滑动窗口
// O(n)/O(k)
// 100ms/49.2MB
var containsNearbyDuplicate = function (nums, k) {
  let set = new Set();
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    if (i > k) {
      set.delete(nums[i - k - 1]);
    }

    if (set.has(nums[i])) {
      return true;
    }
    set.add(nums[i]);
  }
  return false;
};

let nums = [1, 2, 3, 1],
  k = 3;
console.log(containsNearbyDuplicate(nums, k));

nums = [1, 0, 1, 1];
k = 1;
console.log(containsNearbyDuplicate(nums, k));

nums = [1, 2, 3, 1, 2, 3];
k = 2;
console.log(containsNearbyDuplicate(nums, k));
