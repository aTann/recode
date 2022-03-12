// 453. 最小操作次数使数组元素相等
// https://leetcode-cn.com/problems/minimum-moves-to-equal-array-elements/
/**
 * @param {number[]} nums
 * @return {number}
 */
// var minMoves = function (nums) {
//   let max = Math.max(...nums);
//   let sum = nums.reduce((acc, cur) => acc + cur, 0);
//   let n = nums.length;

//   return n * max - sum;
// };
// O(n^2)/O(1)
var minMoves = function (nums) {
  let max = Math.max(...nums);
  let min = Math.min(...nums);
  let diff = max - min;
  let ans = diff;

  while (diff) {
    const idx = nums.indexOf(max);
    nums = nums.map((n, ind) => {
      if (ind !== idx) {
        n += diff;
      }
      return n;
    });

    max = Math.max(...nums);
    min = Math.min(...nums);
    diff = max - min;
    ans += diff;
  }

  return ans;
};

// 排序
// O(n)/O(logn)
// 108ms/45.8MB
var minMoves = function (nums) {
  let list = nums.sort((p, n) => p - n);
  let n = nums.length - 1;
  let min = nums[0];
  let max = nums[n];
  let ans = max - min;

  while (min !== max) {
    n -= 1;

    min = max;
    max = nums[n] + ans;

    ans += max - min;
  }

  return ans;
};

// 减去最小值相加即可
// O(n)/O(1)
// 80ms/43.8MB
var minMoves = function (nums) {
  let min = Math.min(...nums);
  let ans = 0;

  for (let i = 0; i < nums.length; i++) {
    ans += nums[i] - min;
  }

  return ans;
};

// 3
var nums = [1, 2, 3];
console.log(minMoves(nums));

// 0
var nums = [1, 1, 1];
console.log(minMoves(nums));

// 300
var nums = [-100, 0, 100];
console.log(minMoves(nums));

// 999999999
var nums = [1, 1, 1000000000];
console.log(minMoves(nums));

// 7
var nums = [5, 6, 8, 8, 5];
console.log(minMoves(nums));

// 487
var nums = [83, 86, 77, 15, 93, 35, 86, 92, 49, 21];
console.log(minMoves(nums));
