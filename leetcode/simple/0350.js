// 350. 两个数组的交集 II
// https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// 遍历对比，将已经遍历位置的移除
// O(m*n)/O(n)
// 84ms/41.5MB
var intersect = function (nums1, nums2) {
  let i = 0,
    j = 0;
  let m = nums1.length,
    n = nums2.length;
  let list = [];
  while (i < m) {
    j = 0;
    while (j < n) {
      if (nums1[i] === nums2[j]) {
        list.push(nums1[i]);
        nums2[j] = void 0;
        break;
      }
      j += 1;
    }
    i += 1;
  }

  return list;
};

// 短的做主遍历
// O(n * m/2)/O(1)
// 64ms/41.5MB
var intersect = function (nums1, nums2) {
  let i = 0,
    j = 0;
  let m = nums1.length,
    n = nums2.length;
  let list = [];

  if (m > n) {
    [nums1, nums2] = [nums2, nums1];
    [m, n] = [n, m];
  }

  while (i < m) {
    j = 0;
    while (j < n) {
      if (nums1[i] === nums2[j]) {
        list.push(nums1[i]);
        nums2[j] = null;
        break;
      }
      j += 1;
    }
    i += 1;
  }

  return list;
};

// 先排序
// O(mlogm + nlogn)/O(min(m + n))
// 68ms/41.9MB
var intersect = function (nums1, nums2) {
  let i = 0,
    j = 0;
  let m = nums1.length,
    n = nums2.length;
  let list = [];

  nums1 = nums1.sort((p, n) => p - n);
  nums2 = nums2.sort((p, n) => p - n);

  if (m > n) {
    [nums1, nums2] = [nums2, nums1];
    [m, n] = [n, m];
  }

  while (i < m && j < n) {
    if (nums1[i] === nums2[j]) {
      list.push(nums1[i]);
      i += 1;
      j += 1;
    } else if (nums1[i] < nums2[j]) {
      i += 1;
    } else {
      j += 1;
    }
  }

  return list;
};

// 题解
// HashMap
// O(n)/O(k)
// 76ms/43.4MB
var intersect = function (nums1, nums2) {
  let map = new Map();
  let ans = [];
  for (let i = 0; i < nums1.length; i++) {
    let num = nums1[i];
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  }

  for (let k = 0; k < nums2.length; k++) {
    const num = nums2[k];
    if (map.get(num)) {
      ans.push(num);
      map.set(num, map.get(num) - 1);
    }
  }

  return ans
};

var nums1 = [1, 2, 2, 1],
  nums2 = [2, 2];
console.log(intersect(nums1, nums2));

var nums1 = [4, 9, 5],
  nums2 = [9, 4, 9, 8, 4];
console.log(intersect(nums1, nums2));

var nums1 = [4, 7, 9, 7, 6, 7],
  nums2 = [5, 0, 0, 6, 1, 6, 2, 2, 4];
console.log(intersect(nums1, nums2));
