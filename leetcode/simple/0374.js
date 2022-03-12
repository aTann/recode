// 374. 猜数字大小
// https://leetcode-cn.com/problems/guess-number-higher-or-lower/
/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */
var pick = 0;
var guess = function (num) {
  return num > pick ? -1 : num < pick ? 1 : 0;
};

/**
 * @param {number} n
 * @return {number}
 */
// 二分 [l, r]
// O(logn)/O(1)
// 52ms/41.1MB
var guessNumber = function (n) {
  let low = 0,
    high = n;
  while (1) {
    n = low + ((high - low) >> 1);
    if (guess(n) === 0) {
      break;
    }
    if (guess(n) > 0) {
      low = n + 1;
    }
    if (guess(n) < 0) {
      high = n - 1;
    }
  }

  return n;
};

// 题解，没有使用 guess(n) === 0 的条件，而是利用 left===right 的收敛
var guessNumber = function (n) {
  let left = 1,
    right = n;
  while (left < right) {
    // 循环直至区间左右端点相同
    const mid = Math.floor(left + (right - left) / 2);
    if (guess(mid) <= 0) {
      right = mid; // 答案在区间 [left, mid] 中
    } else {
      left = mid + 1; // 答案在区间 [mid+1, right] 中
    }
  }
  // 此时有 left == right，区间缩为一个点，即为答案
  return left;
};

let n = 10;
pick = 6;
console.log(guessNumber(n));

n = 1;
pick = 1;
console.log(guessNumber(n));

n = 2;
pick = 1;
console.log(guessNumber(n));

n = 2;
pick = 2;
console.log(guessNumber(n));
