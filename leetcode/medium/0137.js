// 137. 只出现一次的数字 II
// https://leetcode-cn.com/problems/single-number-ii/
/**
 * @param {number[]} nums
 * @return {number}
 */
// 哈希表
// 利用字典存储个数，如果达到 3 个则移除，最后只留下一个
// O(n)/O(n)
// 72ms/40.6MB
var singleNumber = function (nums) {
  var map = new Map();
  let i = nums.length - 1;

  while (i >= 0) {
    let c = map.get(nums[i]);
    if (c) {
      map.set(nums[i], c + 1);
      if (!((c + 1) % 3)) {
        map.delete(nums[i]);
      }
    } else {
      map.set(nums[i], 1);
    }

    i -= 1;
  }

  return [...map.keys()][0];
};

// 64ms/40.5MB
var singleNumber = function (nums) {
  var map = new Map();
  let i = nums.length - 1;

  while (i >= 0) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    i -= 1;
  }

  for (let [key, val] of map.entries()) {
    if (val === 1) {
      return key;
    }
  }
};

// 题解
// 位运算
// O(n)/O(1)
var singleNumber = function (nums) {
  let ans = 0;
  for (let i = 0; i < 32; ++i) {
    let total = 0;
    for (const num of nums) {
      total += (num >> i) & 1;
    }
    if (total % 3 != 0) {
      ans |= 1 << i;
    }
  }
  return ans;
};

var singleNumber = function (nums) {
  let ans = 0;
  let or = 0;
  
  // 数据最多有多少位字节
  for (const num of nums) {
    or ^= num
  }

  let n = or.toString(2).length;

  for (let i = 0; i <= n; ++i) {
    let total = 0;
    for (const num of nums) {
      total += (num >> i) & 1;
    }
    if (total % 3 != 0) {
      ans |= 1 << i;
    }
  }
  return ans;
};

var nums;

nums = [2, 2, 3, 2];
console.log(singleNumber(nums));

nums = [2, 2, 2, -1, -1, -1, 8, -7, 0, -7, 0, -7, 0];
console.log(singleNumber(nums));
