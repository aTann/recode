// 349. 两个数组的交集
// https://leetcode-cn.com/problems/intersection-of-two-arrays/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// HashMap
// O(m*n)/O(m*n)
// 60ms/41.2MB
var intersection = function (nums1, nums2) {
  let n = [];
  for (let i = 0; i < nums1.length; i++) {
    const t = nums1[i];
    if (n.includes(t)) {
      continue;
    }
    if (nums2.includes(t)) {
      n.push(t);
    }
  }
  return n;
};

// 先输出集合，再用短的集合进行遍历
// O(m+n)/O(m+n)
// 56ms/42.9MB
var intersection = function (nums1, nums2) {
  // O(m+n)
  let s1 = new Set(nums1);
  let s2 = new Set(nums2);
  let v = [];
  // O(min(m,n))
  const compute = (c1, c2) => c1.forEach((n) => c2.has(n) && v.push(n));

  if (s1.size < s2.size) {
    compute(s1, s2);
  } else {
    compute(s2, s1);
  }

  return v;
};

// 排序 + 双指针
// O(mlogm + nlogn)/O(logm + logn)
var intersection = function (nums1, nums2) {
  let n1 = nums1.sort((p, n) => p - n); // O(mlogm)
  let n2 = nums2.sort((p, n) => p - n); // O(nlogn)
  let i = 0,
    j = 0;
  let n = [];

  // O(m + n)
  while (i < n1.length && j < n2.length) {
    if (n1[i] === n2[j]) {
      // 唯一性，不等于上一个，放入
      if (n1[i] !== n.at(-1)) {
        n.push(n1[i]);
      }
      i += 1;
      j += 1;
    } else if (n1[i] < n2[j]) {
      // 小的 +1
      i += 1;
    } else {
      j += 1;
    }
  }

  return n;
};

let nums1 = [1, 2, 2, 1],
  nums2 = [2, 2];
console.log(intersection(nums1, nums2));

nums1 = [4, 9, 5];
nums2 = [9, 4, 9, 8, 4];
console.log(intersection(nums1, nums2));
