// 414. 第三大的数
// https://leetcode-cn.com/problems/third-maximum-number/
/**
 * @param {number[]} nums
 * @return {number}
 */
// 先做集合处理，再进行遍历，存储 3 最大 3 个值
// O(n)/O(n)
// 68ms/43.4MB
var thirdMax = function (nums) {
  let ans = Array(3).fill(Number.MIN_SAFE_INTEGER);
  let set = new Set(nums);

  for (let n of set) {
    if (n > ans[0]) {
      ans.unshift(n);
      ans.pop();
    } else if (n > ans[1]) {
      [ans[1], ans[2]] = [n, ans[1]];
    } else if (n > ans[2]) {
      ans[2] = n;
    }
  }

  return ans[2] > Number.MIN_SAFE_INTEGER ? ans[2] : ans[0];
};

// 窗口滑动
// O(3n)/O(1)
// 56ms/43MB
var thirdMax = function (nums) {
  let ans = Array(3).fill(Number.MIN_SAFE_INTEGER);

  for (let i = 0; i < nums.length; i++) {
    let n = nums[i];
    if (!ans.includes(n) && n > ans[2]) {
      for (let k = 0; k < 3; k++) {
        if (n > ans[k]) {
          ans.splice(k, 0, n);
          ans.pop();

          break;
        }
      }
    }
  }

  return ans[2] > Number.MIN_SAFE_INTEGER ? ans[2] : ans[0];
};

// 排序
// O(nlogn)/O(logn)
// 64ms/41.3MB
var thirdMax = function (nums) {
  nums = nums.sort((p, n) => n - p);

  let diff = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] !== nums[i]) {
      diff += 1;
      if (diff === 3) {
        return nums[i];
      }
    }
  }

  return nums[0];
};

// 排序
// O(nlogn)/O(logn)
// 72ms/47.8MB
var thirdMax = function (nums) {

  let ans = Array(3).fill(Number.MIN_SAFE_INTEGER)

  for (let i = 0; i < nums.length; i++) {
    if (!ans.includes(nums[i])) {
      ans.push(nums[i])
      ans = ans.sort((p, n) => n - p);
      ans.pop()
      
    }
  }

  return ans[2] > Number.MIN_SAFE_INTEGER ? ans[2] : ans[0];
};

var nums = [3, 2, 1];
console.log(thirdMax(nums));

var nums = [2, 1];
console.log(thirdMax(nums));

var nums = [3, 2, 2, 1];
console.log(thirdMax(nums));
