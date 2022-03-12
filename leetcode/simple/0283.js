// 283. 移动零
// https://leetcode-cn.com/problems/move-zeroes/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 向前移动非 0 数据，末尾填充 0 的数据
// O(n)/O(1)
// 100ms/ 45.3MB
var moveZeroes = function (nums) {
  let z = 0;
  let len = nums.length;
  let i;
  for (i = 0; i < len; i++) {
    if (!nums[i]) {
      z += 1;
    } else {
      nums[i - z] = nums[i];
    }
  }

  i = len - 1;

  while (i >= len - z) {
    nums[i] = 0;
    i -= 1;
  }
};

// 96ms/46.1MB
var moveZeroes = function (nums) {
  let j = 0;
  let i;
  let len = nums.length;
  for (i = 0; i < len; i++) {
    if (nums[i]) {
      nums[j] = nums[i];
      j += 1;
    }
  }

  while (j < len) {
    nums[j] = 0;
    j += 1;
  }
};

// 双指针
// O(n * m)/O(1)
// 72ms/45.6MB
var moveZeroes = function (nums) {
  let j = 0;
  let i;
  let len = nums.length;
  let z = 0;

  while (nums[j]) {
    j += 1;
  }

  for (i = j; i < len; i++) {
    if (nums[i]) {
      nums[j] = nums[i];
      j += 1;
    }
  }

  while (j < len) {
    nums[j] = 0;
    j += 1;
  }
};

// 题解
// 92ms/45.9MB
var moveZeroes = function (nums) {
  let left = 0,
    right = 0;
  let len = nums.length;
  while (right < len) {
    if (nums[right]) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left += 1;
    }
    right += 1;
  }
};

// 68ms/46MB
var moveZeroes = function (nums) {
  let left = 0,
    right = 0;
  let len = nums.length;
  
  while (right < len) {
    if (nums[right]) {
      nums[left] = nums[right];
      left += 1;
    }
    right += 1;
  }

  while (left < len) {
    nums[left] = 0;
    left += 1;
  }
};

let nums = [0];
moveZeroes(nums);
console.log(nums);

nums = [2, 1];
moveZeroes(nums);
console.log(nums);

nums = [1, 0];
moveZeroes(nums);
console.log(nums);

nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums);
