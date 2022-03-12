// 228. 汇总区间
// https://leetcode-cn.com/problems/summary-ranges/
/**
 * @param {number[]} nums
 * @return {string[]}
 */
// 动态规划
// O(n)/O(1)
// 72ms/37.7MB
var summaryRanges = function (nums) {
  if (!nums.length) {
    return nums;
  }

  let top;
  const summary = [];
  let len = nums.length;

  top = nums[0];

  for (let idx = 0; idx < len; idx++) {
    const cur = nums[idx];
    const next = nums[idx + 1];

    if (cur + 1 !== next) {
      if (cur === top) {
        summary.push(`${top}`);
      } else {
        summary.push(`${top}->${cur}`);
      }
      top = next;
    }
  }

  return summary;
};

// 题解
// O(n)/O(1)
// 72ms/37.8MB
var summaryRanges = function (nums) {
  const ret = [];
  let i = 0;
  const n = nums.length;

  while (i < n) {
    const low = i;
    i += 1;
    while (i < n && nums[i] === nums[i - 1] + 1) {
      i += 1;
    }
    const high = i - 1;
    const temp = ["" + nums[low]];
    if (low < high) {
      temp.push("->");
      temp.push("" + nums[high]);
    }
    ret.push(temp.join(""));
  }

  return ret;
};

let nums = [0, 1, 2, 4, 5, 7];
console.log(summaryRanges(nums));

nums = [0, 2, 3, 4, 6, 8, 9];
console.log(summaryRanges(nums));
