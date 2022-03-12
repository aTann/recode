// 1646. 获取生成数组中的最大值
// https://leetcode-cn.com/problems/get-maximum-in-generated-array/
/**
 * @param {number} n
 * @return {number}
 */
// 先根据题意生成数列，然后使用 Math.max(...nums) 得到最大值
// O(n)/O(n + 1)
// 64ms/41MB
var getMaximumGenerated = function (n) {
  let nums = [0];

  n && nums.push(1);

  for (let i = 1; i <= n; i++) {
    let u = 2 * i;
    let v = u + 1;

    if (u >= 2 && u <= n) {
      nums[u] = nums[i];
    }

    if (v >= 2 && v <= n) {
      nums[v] = nums[i] + nums[i + 1];
    }
  }

  return Math.max(...nums);
};

// 动态规划
// O(n)/O(n + 1)
// 64ms/41MB
var getMaximumGenerated = function (n) {
  let nums = [0, 1];

  if (!n) {
    return nums[0];
  }

  let mid = n >>> 1;
  let max = 1;

  if (!(n & 1)) {
    mid -= 1;
  }

  for (let i = 1; i <= mid; i++) {
    let u = 2 * i;
    let v = u + 1;

    nums[u] = nums[i];
    nums[v] = nums[i] + nums[i + 1];
    max = Math.max(max, nums[u], nums[v]);
  }

  return max;
};

// 题解
// 模拟
// O(n)/O(n)
// 52ms/41MB
var getMaximumGenerated = function (n) {
  if (n === 0) {
    return 0;
  }
  const nums = Array(n + 1).fill(0);
  nums[1] = 1;

  for (let i = 0; i <= n; i++) {
    nums[i] = nums[i >> 1] + (i % 2) * nums[(i >> 1) + 1];
  }

  return Math.max(...nums)
};

let n = 7;
console.log(getMaximumGenerated(n));

n = 2;
console.log(getMaximumGenerated(n));

n = 3;
console.log(getMaximumGenerated(n));

n = 15;
console.log(getMaximumGenerated(n));

// 7
// 0 0
// 1 1
// 2 <= 2 * 1 <= 7 nums[2] = nums[1] = 1
// 2 <= 2 * 1 + 1 <= 7 nums[2 * 1 + 1] = nums[1] + nums[1 + 1] = 2
// 2 1
//  2 <= 2*2 <= 7, nums[4] = 1
//  2 <= 2*2 + 1 <= 7, nums[5] = nums[2] + nums[3] = 3
// 3 2
//  2 <= 2*3 <= 7, nums[6] = nums[3] = 2
//  2 <= 2*3 + 1 <= 7, nums[7] = nums[3] + nums[4] = 2 + 1 = 3
// 4 1
// 5 3
// 6 2
// 7 3
