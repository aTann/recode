// 26. 删除有序数组中的重复项
// https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
// js 语言特性，利用集合和数组进行处理
// 80 ms / 40.3 MB	
var removeDuplicates = function (nums) {
  let res = new Set(nums);

  Array.from(res).forEach((r, ix) => {
    nums[ix] = r;
  });

  return res.size;
};

// 双指针，遍历，记录当前填补位置以及当前值，一旦出现值不相同，填补并更新当前位置值以及更新当前值
// 80 ms / 40.3 MB	
// O(n) / O(1)
var removeDuplicates = function (nums) {
  let pos = 1;
  for (let ix = 1; ix < nums.length; ix++) {
    if (nums[ix] !== nums[ix - 1]) {
      nums[pos] = nums[ix];
      pos += 1;
    }
  }

  return pos
};

var a = [1, 1, 2];
var r = removeDuplicates(a);
console.log(r);

a = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
r = removeDuplicates(a);
console.log(r);
