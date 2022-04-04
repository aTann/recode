// 561. 数组拆分 I
// https://leetcode-cn.com/problems/array-partition-i/
/**
 * @param {number[]} nums
 * @return {number}
 */

// 排序，组合
// O(n)/O(logn)
// 628ms/65.9MB
var arrayPairSum = function (nums) {
  let ans = 0;

  nums = nums.sort((p, n) => n - p);
  while (nums.length) {
    ans += Math.min(...nums.slice(0, 2));
    nums = nums.slice(2);
  }

  return ans;
};

// 112ms/46.3MB
var arrayPairSum = function (nums) {
  let ans = 0;

  nums = nums.sort((p, n) => n - p);
  for (let i = 1; i < nums.length; i += 2) {
    ans += nums[i];
  }
  return ans;
};

var nums = [1, 4, 3, 2];
console.log(arrayPairSum(nums));

var nums = [6, 2, 6, 5, 1, 2];
console.log(arrayPairSum(nums));
