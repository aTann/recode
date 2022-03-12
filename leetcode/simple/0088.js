// 88. 合并两个有序数组
// https://leetcode-cn.com/problems/merge-sorted-array/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
//  双指针
// O(m+n)/O(m+n)
// 68ms/38.1MB
var merge = function (nums1, m, nums2, n) {
  let i = 0,
    j = 0;
  let list = [];

  if (!n) {
    return;
  }

  if (!m || nums1[m - 1] <= nums2[0]) {
    nums2.forEach((item, idx) => {
      nums1[m + idx] = item;
    });
  } else {
    while (i < m && j < n) {
      if (nums1[i] > nums2[j]) {
        list.push(nums2[j]);
        j += 1;
      } else {
        list.push(nums1[i]);
        i += 1;
      }
    }

    while (i < m) {
      list.push(nums1[i]);
      i += 1;
    }

    while (j < n) {
      list.push(nums2[j]);
      j += 1;
    }

    list.forEach((item, idx) => {
      nums1[idx] = item;
    });
  }
};

// 逆双指针
// O(m+n)/O(1)
// 76ms/38MB
var merge = function (nums1, m, nums2, n) {
  let i = m - 1,
    j = n - 1,
    k = m + n - 1;

  if (!n) {
    return;
  }

  if (!m || nums1[m - 1] <= nums2[0]) {
    nums2.forEach((item, idx) => {
      nums1[m + idx] = item;
    });
  } else {
    while (k >= 0) {
      let cur;
      if (i === -1) {
        cur = nums2[j];
        j -= 1;
      } else if (j === -1) {
        cur = nums1[i];
        i -= 1;
      } else if (nums1[i] > nums2[j]) {
        cur = nums1[i];
        i -= 1;
      } else {
        cur = nums2[j];
        j -= 1;
      }
      nums1[k] = cur;
      k -= 1;
    }
  }
};

var nums1 = [],
  m = 0,
  nums2 = [],
  n = 0;

merge(nums1, m, nums2, n);
console.log(nums1);

nums1 = [1, 2, 3, 0, 0, 0];
m = 3;
nums2 = [2, 5, 6];
n = 3;

merge(nums1, m, nums2, n);
console.log(nums1);

nums1 = [1];
m = 1;
nums2 = [];
n = 0;

merge(nums1, m, nums2, n);
console.log(nums1);

nums1 = [0];
m = 0;
nums2 = [1];
n = 1;

merge(nums1, m, nums2, n);
console.log(nums1);

nums1 = [4, 5, 6, 0, 0, 0];
m = 3;
nums2 = [1, 2, 3];
n = 3;

merge(nums1, m, nums2, n);
console.log(nums1);

nums1 = [-1, 0, 0, 3, 3, 3, 0, 0, 0];
m = 6;
nums2 = [1, 2, 2];
n = 3;

merge(nums1, m, nums2, n);
console.log(nums1);
