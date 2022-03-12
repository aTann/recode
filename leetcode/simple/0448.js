// 448. 找到所有数组中消失的数字
// https://leetcode-cn.com/problems/find-all-numbers-disappeared-in-an-array/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// HashMap
// O(n)/O(n)
// 112ms/57.8MB
var findDisappearedNumbers = function (nums) {
  let map = new Map();
  let ans = [];

  nums.forEach((num) => {
    map.set(num, num);
  });

  for (let i = 1; i <= nums.length; i++) {
    if (!map.has(i)) {
      ans.push(i);
    }
  }

  return ans;
};

// 填充数组，然后移除存在的下标
// O(n)/O(n)
// 88ms/50.3MB
var findDisappearedNumbers = function (nums) {
  let ans = Array(nums.length + 1)
    .fill(0)
    .map((_, i) => i);

  nums.forEach((i) => (ans[i] = 0));

  ans.shift();

  return ans.filter((i) => i !== 0);
};

// 原地修改
// O(n)/O(1)
// 84ms/49.3MB
var findDisappearedNumbers = function (nums) {
  let n = nums.length;
  let ans = [];

  for (let i = 0; i < n; i++) {
    // 修改过下标的，利用求模运算复原
    const x = (nums[i] - 1) % n;
    // 修改下标的数值 +n >= n
    nums[x] += n;
  }

  // 缺少的数值，作为下标找到值会小于等于 n
  for (let i = 0; i < n; i++) {
    if (nums[i] <= n) {
      ans.push(i + 1);
    }
  }

  return ans;
};

// 140ms/59.6MB
var findDisappearedNumbers = function (nums) {
  let n = nums.length;
  let ans = [];

  for (let i = 0; i < 2 * n; i++) {
    if (i < n) {
      const x = nums[i] - 1 + n;
      nums[x] = x;
    }
    if (!nums[i]) {
      ans.push(i - n + 1);
    }
  }

  return ans;
};

// 鸽笼
// 80ms/48.8MB
var findDisappearedNumbers = function (nums) {
  const n = nums.length;
  const ans = [];

  for (let i = 0; i < n; i++) {
    let num = Math.abs(nums[i]);
    nums[num - 1] = -Math.abs(nums[num - 1]);
  }

  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) {
      ans.push(i + 1);
    }
  }

  return ans;
};

var nums = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(findDisappearedNumbers(nums));

var nums = [1, 1];
console.log(findDisappearedNumbers(nums));
