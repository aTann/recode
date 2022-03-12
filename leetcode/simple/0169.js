// 169. 多数元素
// https://leetcode-cn.com/problems/majority-element/

/**
 * @param {number[]} nums
 * @return {number}
 */
// hashMap
// O(n)/O(n)
// 76ms/40MB
var majorityElement = function (nums) {
  var map = new Map();

  nums.forEach((item) => {
    let p = map.get(item);
    if (p) {
      map.set(item, p + 1);
    } else {
      map.set(item, 1);
    }
  });

  var max = 0;
  var res = null;

  map.forEach((v, i) => {
    if (v > max) {
      max = v;
      res = i;
    }
  });

  return res;
};

// 排序
// O(nlogn) / O(logn)
// O(76ms)/40.7MB
var majorityElement = function (nums) {
  let len = nums.length;

  qsort(nums, 0, len - 1);

  let max = 1;
  let maxEle = nums[0];
  let cur = nums[0];
  let count = 0;

  let i = 0;

  while (i < len + 1) {
    let num = nums[i];
    if (cur !== num) {
      if (count > max) {
        max = count;
        maxEle = cur;
      }

      cur = num;
      count = 1;
    } else {
      count += 1;
    }
    i += 1;
  }

  return maxEle;
};

var qsort = function (nums, start, end) {
  if (start < end) {
    var p = start;
    var q = end;
    var v = nums[p];

    while (p < q) {
      while (p < q && nums[q] > v) {
        q -= 1;
      }

      if (p < q) {
        nums[p] = nums[q];
        p += 1;
      }

      while (p < q && nums[p] < v) {
        p += 1;
      }

      if (p < q) {
        nums[q] = nums[p];
        q -= 1;
      }
    }

    nums[p] = v;

    qsort(nums, start, p - 1);
    qsort(nums, p + 1, end);
  }
};

// Boyer-Moore 投票算法
// 把众数记为 +1，把其他数记为 -1，将它们全部加起来，显然和大于 0，从结果本身我们可以看出众数比其他数多
// O(n)/O(1)
// 76ms/40MB
var majorityElement = function (nums) {
  let count = 0;
  let candidate = null;

  for (let i = 0; i < nums.length; i++) {
    let n = nums[i];
    if (!count) {
      candidate = n;
    }

    count += candidate === n ? 1 : -1;
  }

  return candidate;
};

let nums = [];

nums = [3, 2, 3];
console.log(majorityElement(nums));

nums = [2, 2, 1, 1, 1, 2, 2];
console.log(majorityElement(nums));

nums = [1, 3, 4, 2, 2, 2, 2];
console.log(majorityElement(nums));

nums = [1, 1, 2];
console.log(majorityElement(nums));
