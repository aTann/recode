// 217. 存在重复元素
// https://leetcode-cn.com/problems/contains-duplicate/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 利用内部的属性 Set 数据结构
// O(1)/O(n)
// 92ms/46.4MB
var containsDuplicate = function (nums) {
  const set = new Set(nums);
  return set.size !== nums.length;
};

// hashMap
// O(n)/O(n)
// 100ms/46.7MB
var containsDuplicate = function (nums) {
  const map = new Map();
  let i = 0;

  while (nums[i] != null) {
    let m = nums[i];
    if (map.get(m) != null) {
      return true;
    }

    map.set(m, m);
    i += 1;
  }

  return false;
};

// 108ms/48MB
var containsDuplicate = function (nums) {
  const map = {};
  let i = 0;

  while (nums[i] != null) {
    let m = nums[i];
    if (map[m] != null) {
      return true;
    }

    map[m] = m;
    i += 1;
  }

  return false;
};

// 排序，比较前后 2 个是否相同
// 192ms/47.1MB
var containsDuplicate = function (nums) {
  let i = 1;

  nums = nums.sort((p, n) => p - n);

  while (nums[i] != null) {
    if (nums[i] === nums[i - 1]) {
      return true;
    }
    i += 1;
  }

  return false;
};

let nums = [1, 2, 3, 1];
console.log(containsDuplicate(nums));

nums = [1, 2, 3, 4];
console.log(containsDuplicate(nums));

nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
console.log(containsDuplicate(nums));
