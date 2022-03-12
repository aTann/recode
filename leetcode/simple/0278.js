// 278. 第一个错误的版本
// https://leetcode-cn.com/problems/first-bad-version/
/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
// 遍历
// O(n)/O(1)
// 2868ms/41MB
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    for (let i = n; i > 0; i--) {
      if (!isBadVersion(i)) {
        return i + 1;
      }
    }
  };
};

// 二分法
// O(logn)/O(1)
// 52ms/40.8MB
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let high = n;
    let low = 1;

    while (low < high) {
      let mid = low + ((high - low) >> 1);
      if (isBadVersion(mid)) {
        if (!isBadVersion(mid - 1)) {
          return mid;
        }
        high = mid;
      } else {
        if (isBadVersion(mid + 1)) {
          return mid + 1;
        }
        low = mid;
      }
    }

    return low;
  };
};

// 需要注意边界处理
// O(n)/O(1)
// 56ms/40.6MB
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let high = n;
    let low = 1;

    while (low < high) {
      let mid = low + ((high - low) >> 1);
      if (isBadVersion(mid)) {
        high = mid;
      } else {
        low = mid + 1;
      }
    }

    return low;
  };
};

function badVersion(bad) {
  return (v) => v >= bad;
}

// let n = 1,
//   bad = 1;
// let isBadVersion = badVersion(bad);
// console.log(solution(isBadVersion)(n));

// n = 5;
// bad = 4;
// isBadVersion = badVersion(bad);
// console.log(solution(isBadVersion)(n));

// n = 5;
// bad = 5;
// isBadVersion = badVersion(bad);
// console.log(solution(isBadVersion)(n));

let n = 2126753390;
let bad = 1702766719;
let isBadVersion = badVersion(bad);
console.log(solution(isBadVersion)(n));
