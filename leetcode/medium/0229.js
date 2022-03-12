// 229. 求众数 II
// https://leetcode-cn.com/problems/majority-element-ii/submissions/
// 使用 HashMap
// O(n + S)/O(S)
// 68ms/41.8MB
var majorityElement = function (nums) {
  const map = new Map();
  const len = nums.length;
  const ret = [];
  for (let i = 0; i < len; i++) {
    let num = nums[i];
    map.set(num, (map.get(num) || 0) + 1);
  }

  map.forEach((v, k) => {
    if (v / len - 1 / 3 > Number.EPSILON) {
      ret.push(k);
    }
  });

  return ret;
};

// Boyer-Moore 投票算法，本质是对拼消耗 [MJRTY - A Fast Majority Vote Algorithm](https://www.cs.ou.edu/~rlpage/dmtools/mjrty.pdf)
// 题目求超过 1/3 多的元素，每次选择三个互不相同的元素进行删除（或称为「抵消」）
// 2 个情况：1. 存在 1 个解，x(k) 和 (n-k)；2. 存在 2 个解，x(k),y(m) 和 n-k-m
// 其实就是将 k 和 m 当作一组 k+m > n-k-m
// O(n)/O(1)
// 72ms/42MB
var majorityElement = function (nums) {
  let len = nums.length;
  let vote1 = 0;
  let vote2 = 0;
  let cdt1 = void 0;
  let cdt2 = void 0;

  // 挑选大多数
  for (let i = 0; i < len; i++) {
    const n = nums[i];

    if (vote1 > 0 && cdt1 === n) {
      vote1 += 1;
    } else if (vote2 > 0 && cdt2 === n) {
      vote2 += 1;
    } else if (!vote1) {
      cdt1 = n;
      vote1 += 1;
    } else if (!vote2) {
      cdt2 = n;
      vote2 += 1;
    } else {
      vote1 -= 1;
      vote2 -= 1;
    }
  }

  let out = [];
  let ct1 = 0;
  let ct2 = 0;

  // 统计个数，校验是否大于 1/3
  for (let j = 0; j < len; j++) {
    let n = nums[j];
    if (vote1 > 0 && n === cdt1) {
      ct1 += 1;
    }
    if (vote2 > 0 && n === cdt2) {
      ct2 += 1;
    }
  }

  if (vote1 > 0 && ct1 > len / 3) {
    out.push(cdt1);
  }

  if (vote2 > 0 && ct2 > len / 3) {
    out.push(cdt2);
  }

  return out;
};

let nums = null;

nums = [3, 2, 3]; // [3]
console.log(majorityElement(nums));

nums = [1, 1, 1, 3, 3, 2, 2, 2]; // [1, 2]
console.log(majorityElement(nums));

nums = [1]; // [1]
console.log(majorityElement(nums));

nums = [1, 2, 3]; // []
console.log(majorityElement(nums));

nums = [3, 1, 2, 3]; // [3]
console.log(majorityElement(nums));

nums = [2, 1, 1, 3, 1, 4, 5, 6]; // [1]
console.log(majorityElement(nums));

// [3, 9]
nums = [
  1, 1, 2, 2, 7, 7, 8, 8, 9, 3, 9, 3, 9, 3, 9, 3, 9, 3, 9, 3, 9, 3, 9, 3, 9, 3,
  9, 3, 9, 3, 9, 3, 9, 3, 9, 3, 9, 3,
];
console.log(majorityElement(nums));

// [0]
nums = [0, 3, 4, 0];
console.log(majorityElement(nums));

// [1]
nums = [1, 1, 2, 3, 4, 1, 1, 5, 6, 7, 1, 1, 8, 9, 10, 1, 11, 12, 13, 14];
console.log(majorityElement(nums));
