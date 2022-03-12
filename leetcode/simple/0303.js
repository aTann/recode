// 303. 区域和检索 - 数组不可变
// https://leetcode-cn.com/problems/range-sum-query-immutable/
/**
 * @param {number[]} nums
 */
// O(n)/O(n)
// 176ms/47.8MB
var NumArray = function (nums) {
  this.nums = nums || [];
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
// O(n)/O(1)
NumArray.prototype.sumRange = function (left, right) {
  const { nums } = this;
  let sum = 0;
  for (let i = left; i <= right; i++) {
    sum += nums[i];
  }

  return sum;
};

/**
 * @param {number[]} nums
 */
// O(n)/O(n)
// 180ms/47.8MB
var NumArray = function (nums) {
  this.nums = nums || [];
  this.map = new Map();
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
// O(1)/O(1)，均摊
NumArray.prototype.sumRange = function (left, right) {
  const { map } = this;

  if (map.has(`${left},${right}`)) {
    return map.get(`${left},${right}`);
  }

  const { nums } = this;
  let sum = 0;
  for (let i = left; i <= right; i++) {
    sum += nums[i];
  }

  map.set(`${left},${right}`, sum);

  return sum;
};

/**
 * @param {number[]} nums
 */
// 线段树 [seg tree](https://oi-wiki.org/ds/seg/)
// O(n + logn)/O(logn)
// 112ms/49.2MB
var NumArray = function (nums) {
  let d = [];
  let len = nums.length;
  // 对 [left, right] 区间建立线段树，当前根的编号为 p
  const build = (s, t, p) => {
    if (s === t) {
      d[p] = nums[s];
      return;
    }
    // 移位运算优先级低于加减，(r + l) >> 1 会超出范围
    let m = s + ((t - s) >> 1);

    // 递归左右区间建树
    build(s, m, p * 2);
    build(m + 1, t, p * 2 + 1);

    d[p] = d[p * 2] + d[p * 2 + 1];
  };

  build(0, len - 1, 1);

  this.nums = nums;
  this.d = d;
  this.len = len;
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
// O(logn)/O(logn)
NumArray.prototype.sumRange = function (left, right) {
  const { d, len } = this;
  var getSum = (l, r, s, t, p) => {
    if (l <= s && t <= r) {
      return d[p];
    }

    let m = s + ((t - s) >> 1),
      sum = 0;

    if (l <= m) {
      sum += getSum(l, r, s, m, p * 2);
    }
    if (r > m) {
      sum += getSum(l, r, m + 1, t, p * 2 + 1);
    }

    return sum;
  };
  return getSum(left, right, 0, len - 1, 1);
};

// 题解
// 前缀和
// O(n)/O(n)
// 104ms/48.1MB
/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  const len = nums.length;
  const sums = Array(len + 1).fill(0);

  for (let i = 0; i < len; i++) {
    sums[i + 1] = sums[i] + nums[i];
  }

  this.sums = sums;
};
/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
// O(1)/O(1)
NumArray.prototype.sumRange = function (left, right) {
  let { sums } = this;
  return sums[right + 1] - sums[left];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

var nums = [-2, 0, 3, -5, 2, -1];
var obj = new NumArray(nums);
var p1 = obj.sumRange(0, 2);
console.log(p1);
p1 = obj.sumRange(2, 5);
console.log(p1);
p1 = obj.sumRange(0, 5);
console.log(p1);
