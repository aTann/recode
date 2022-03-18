// 485. 最大连续 1 的个数
// https://leetcode-cn.com/problems/max-consecutive-ones/
/**
 * @param {number[]} nums
 * @return {number}
 */
// 合并为字符串，然后根据 0 的位置进行切分
// O(n)/O(n)
// 60ms/45.2MB
var findMaxConsecutiveOnes = function (nums) {
  let text = nums.join("");
  let list = text.split("0");
  let max = 0;
  for (let i = 0; i < list.length; i += 1) {
    const str = list[i];
    if (str.length > max) {
      max = str.length;
    }
  }

  return max;
};

// O(n)/O(1)
// 72ms/43.2MB
var findMaxConsecutiveOnes = function (nums) {
  let max = 0;
  let temp = 0;
  for (let i = 0; i <= nums.length; i += 1) {
    const e = nums[i];
    if (e === 1) {
      temp += 1;
    } else {
      if (temp > max) {
        max = temp;
      }
      temp = 0;
    }
  }

  return max;
};

// 2 个 0 位置进行互减
var findMaxConsecutiveOnes = function (nums) {
  let max = 0;
  let temp = -1;
  for (let i = 0; i <= nums.length; i += 1) {
    const e = nums[i];
    if (e === 0 || e == null) {
      const t = i - 1 - temp;
      if (t > max) {
        max = t;
      }
      temp = i;
    }
  }

  return max;
};

var nums = [1, 1, 0, 1, 1, 1];
console.log(findMaxConsecutiveOnes(nums));

var nums = [1, 0, 1, 1, 0, 1];
console.log(findMaxConsecutiveOnes(nums));

var nums = [1, 1, 0, 1];
console.log(findMaxConsecutiveOnes(nums));
