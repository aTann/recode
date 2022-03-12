// 53. 最大子数组和
// https://leetcode-cn.com/problems/maximum-subarray/

/**
 * @param {number[]} nums
 * @return {number}
 */
// 动态规划
// O(n)/O(1)
// 88ms/47.5MB
// nums[i] 单独成为一段还是加入 f(i - 1) 对应的那一段：f(i) = max{f(i-1) + nums[i], nums[i]}
var maxSubArray = function (nums) {
  // let i = 0;
  let sum = Number.MIN_SAFE_INTEGER;
  let total = sum;
  // while (nums[i] != null) {
  //   // // 每次添加最新的数据
  //   // total += nums[i];
  //   // // 如果相加后还是小于当前值，累加从当前值重新开始
  //   // if (total < nums[i]) {
  //   //   total = nums[i];
  //   // }

  //   total = Math.max(total + nums[i], nums[i]);

  //   // 缓存当前最大值
  //   // if (total > sum) {
  //   //   sum = total;
  //   // }
  //   sum = Math.max(sum, total);
  //   i += 1;
  // }

  // 92ms/47.9MB
  nums.forEach((num) => {
    total = Math.max(total + num[i], num[i]);
    sum = Math.max(sum, total);
  });

  return sum;
};

// 迭代
// O(1)/O(m)
var maxSubArray = function (
  nums,
  ix = 0,
  total = Number.MIN_SAFE_INTEGER,
  sum = Number.MIN_SAFE_INTEGER
) {
  if (ix > nums.length) {
    return sum;
  }

  let t = total + nums[ix];
  let s = sum;

  if (t < nums[ix]) {
    t = nums[ix];
  }
  if (t > s) {
    s = t;
  }

  return maxSubArray(nums, ix + 1, t, s);
};

// 分治，《算法导论第3版》P40
// O(nlogn)/O(logn)
// 116ms/52.9MB
var maxSubArray = function (nums) {
  return findMaxSubArray(nums, 0, nums.length - 1).sum;
};
var findMaxSubArray = function (nums, low, high) {
  if (high === low) {
    return { low, high, sum: nums[low] };
  }
  let mid = low + ((high - low) >> 1);
  let { low: lLow, high: lHigh, sum: lSum } = findMaxSubArray(nums, low, mid);
  let {
    low: rLow,
    high: rHigh,
    sum: rSum,
  } = findMaxSubArray(nums, mid + 1, high);
  // 跨域中点的情况
  let {
    low: mLow,
    high: mHigh,
    sum: mSum,
  } = crossMaxSubArray(nums, low, mid, high);

  if (lSum >= rSum && lSum >= mSum) {
    return { low: lLow, high: lHigh, sum: lSum };
  }
  
  if (rSum >= lSum && rSum >= mSum) {
    return { low: rLow, high: rHigh, sum: rSum };
  }

  return { low: mLow, high: mHigh, sum: mSum };
};

var crossMaxSubArray = function (nums, low, mid, high) {
  let leftSum = Number.MIN_SAFE_INTEGER;
  let rightSum = Number.MIN_SAFE_INTEGER;
  let sum = 0;
  let i = mid;
  let maxLeft = -1;
  let maxRigth = -1;

  while (i >= low) {
    sum = sum + nums[i];
    if (sum > leftSum) {
      leftSum = sum;
      maxLeft = i;
    }

    i -= 1;
  }

  i = mid + 1;
  sum = 0;
  while (i <= high) {
    sum = sum + nums[i];
    if (sum > rightSum) {
      rightSum = sum;
      maxRigth = i;
    }
    i += 1;
  }
  return {
    maxLeft,
    maxRigth,
    sum: leftSum + rightSum,
  };
};

// leecode 题解
// 设计线段树
// O(n)/O(logn)
// 108 ms / 52.4 MB
function Status(l, r, m, i) {
  this.lSum = l;
  this.rSum = r;
  this.mSum = m;
  this.iSum = i;
}

const pushUp = (l, r) => {
  const iSum = l.iSum + r.iSum;
  const lSum = Math.max(l.lSum, l.iSum + r.lSum);
  const rSum = Math.max(r.rSum, r.iSum + l.rSum);
  // 跨域中点的情况
  const mSum = Math.max(Math.max(l.mSum, r.mSum), l.rSum + r.lSum);
  return new Status(lSum, rSum, mSum, iSum);
}

const getInfo = (a, l, r) => {
  if (l === r) {
      return new Status(a[l], a[l], a[l], a[l]);
  }
  const m = (l + r) >> 1;
  const lSub = getInfo(a, l, m);
  const rSub = getInfo(a, m + 1, r);
  return pushUp(lSub, rSub);
}

var maxSubArray = function(nums) {
  return getInfo(nums, 0, nums.length - 1).mSum;
};


var nums,
  r = 0;

nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
r = maxSubArray(nums);
console.log(r);

nums = [1];
r = maxSubArray(nums);
console.log(r);

nums = [5, 4, -1, 7, 8];
r = maxSubArray(nums);
console.log(r);

nums = [3, -2, -3, -3, 1, 3, 0];
r = maxSubArray(nums);
console.log(r);

nums = [-1];
r = maxSubArray(nums);
console.log(r);

// 渐进上界

// 动态规划
// https://oi-wiki.org/dp/
// 《算法导论第3版》P37
// 递归求解，每层递归分为 3 个步骤：
// 分解（Divide） 步骤将问题划分为一些子问题，子问题的形式与原问题一样，只是规模更小
// 解决（Conquer）步骤递归地求解出子问题。如果子问题的规模足够小，则停止递归，直接求解
// 合并（Combine）步骤将子问题的解决组合成原问题的解
// 分为 2 种情况：递归情况（recursive case） 基本情况（base case）

// 线段树
// https://oi-wiki.org/ds/seg/
