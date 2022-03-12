// 35. 搜索插入位置
// https://leetcode-cn.com/problems/search-insert-position/
// 请必须使用时间复杂度为 O(log n) 的算法。
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 二分法
// O(logn) / O(1)
var searchInsert = function (nums, target) {
  var low = 0,
    high = nums.length - 1,
    mid = 0;

  // 注意边界
  while (low <= high) {
    mid = parseInt((high - low) / 2, 10) + low;

    if (target < nums[mid]) {
      high = mid - 1; // 是否需要挪动
    } else if (target > nums[mid]) {
      low = mid + 1; // 是否需要挪动
    } else {
      return mid;
    }
  }

  return high + 1;
};

var nums, target, r;

nums = [1, 3, 5, 6];
target = 5;
r = searchInsert(nums, target);
console.log(r);

nums = [1, 3, 5, 6];
target = 2;
r = searchInsert(nums, target);
console.log(r);

nums = [1, 3, 5, 6];
target = 7;
r = searchInsert(nums, target);
console.log(r);

nums = [1, 3, 5, 6];
target = 0;
r = searchInsert(nums, target);
console.log(r);

nums = [1];
target = 0;
r = searchInsert(nums, target);
console.log(r);

nums = [1, 3];
target = 2;
r = searchInsert(nums, target);
console.log(r);
