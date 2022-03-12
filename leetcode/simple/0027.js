// 27. 移除元素
// https://leetcode-cn.com/problems/remove-element/
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// 首尾遍历，将尾部的迁移到头部
// 72ms/38.2MB	
var removeElement = function (nums, val) {
  let ix = 0,
    len = nums.length,
    end = len - 1,
    count = 0;
  while (nums[ix] != null && ix <= end) {
    if (nums[ix] === val) {
      while (ix < end && nums[end] === val) {
        nums[end] = null;
        end -= 1;
        count += 1;
      }
      nums[ix] = nums[end];
      nums[end] = null;
      end -= 1;
      count += 1;
    }
    ix += 1;
  }
  return len - count;
};

// 题解
// 68ms/37.6MB
var removeElement = function (nums, val) {
  let ix = 0,
    end = nums.length;
  while (ix < end) {
    if (nums[ix] === val) {
      nums[ix] = nums[end - 1];
      end -= 1;
    } else {
      ix += 1;
    }
  }
  return ix;
};

// 题解方法一，前挪
// 68ms/38MB
var removeElement = function (nums, val) {
  var pos = 0,
    len = nums.length;
  for (let ix = 0; ix < len; ix++) {
    if (nums[ix] !== val) {
      nums[pos] = nums[ix];
      pos += 1;
    }
  }
  return pos;
};

var n = [3, 2, 3, 3],
  v = 3,
  r = removeElement(n, v);

console.log(r);

n = [0, 1, 2, 2, 3, 0, 4, 2];
v = 2;
r = removeElement(n, v);
console.log(r);

n = [1];
v = 1;
r = removeElement(n, v);
console.log(r);
