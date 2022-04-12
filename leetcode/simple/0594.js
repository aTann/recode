// 594. 最长和谐子序列
// https://leetcode-cn.com/problems/longest-harmonious-subsequence/
/**
 * @param {number[]} nums
 * @return {number}
 */
// 排序、遍历，滑动窗口
// O(nlogn)/O(logn)
// 108ms/46.3MB
var findLHS = function (nums) {
  let max = 0;
  let cur = 1;
  let s = 0;
  nums = nums.sort((p, n) => p - n);

  for (let i = 0; i < nums.length + 1; i++) {
    const diff = nums[i] - nums[i - 1];
    if (diff === 0) {
      cur += 1;
      if (s) {
        s += 1;
      }
    } else {
      max = Math.max(max, s);
      if (diff === 1) {
        s = cur + 1;
      } else {
        s = 0;
      }

      cur = 1;
    }
  }

  return max;
};

// 题解，枚举，滑动窗口
// O(nlogn)/O(1)
// 112ms/46.2MB
var findLHS = function (nums) {
  nums = nums.sort((p, n) => p - n);
  let ans = 0;
  let begin = 0;
  for (let end = 0; end < nums.length; end += 1) {
    // 妙哉
    while (nums[end] - nums[begin] > 1) {
      begin += 1;
    }

    if (nums[end] - nums[begin] === 1) {
      ans = Math.max(ans, end - begin + 1);
    }
  }

  return ans;
};

// HashMap
// O(n)/O(n)
// 84ms/51.3MB
var findLHS = function (nums) {
  let ans = 0;
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (map.has(n)) {
      map.set(n, map.get(n) + 1);
    } else {
      map.set(n, 1);
    }
  }

  for (const [k, v] of map) {
    const max = Math.max(map.get(k - 1) || 0, map.get(k + 1) || 0);
    if (max) {
      ans = Math.max(ans, max + v);
    }
  }

  return ans;
};

var nums = [1, 3, 2, 2, 5, 2, 3, 7];
console.log(findLHS(nums));

var nums = [1, 2, 3, 4];
console.log(findLHS(nums));

var nums = [1, 1, 1, 1];
console.log(findLHS(nums));

var nums = [1, 2, 2, 1];
console.log(findLHS(nums));
