// 70. 爬楼梯
// https://leetcode-cn.com/problems/climbing-stairs/

/**
 * @param {number} n
 * @return {number}
 */

// 动态规划，分治递归
// O(2nlogn)/O(2nlogn)
// 1176ms/37.8MB
var climbStairs = function (n) {
  if (n <= 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  if (n === 2) {
    return 2;
  }

  if (n === 3) {
    return 3;
  }

  if (n === 4) {
    return 5;
  }

  if (n === 5) {
    return 8;
  }

  if (n === 6) {
    return 13;
  }

  if (n === 7) {
    return 21;
  }

  if (n === 8) {
    return 34;
  }

  if (n === 8) {
    return 34;
  }

  if (n === 9) {
    return 55;
  }

  return climbStairs(n - 1) + climbStairs(n - 2);
};

// 动态规划，题解
// O(n)/O(1)
// 64ms / 37.6MB
var climbStairs = function (n) {
  let p = 0,
    q = 0,
    r = 1;

  for (let i = 1; i <= n; ++i) {
    // 滚动数组思想
    p = q;
    q = r;
    r = p + q;
  }
  return r;
};


let n;

n = 2;
console.log(climbStairs(n));

n = 3;
console.log(climbStairs(n));

n = 4;
console.log(climbStairs(n));

n = 5;
console.log(climbStairs(n));

n = 6;
console.log(climbStairs(n));

n = 7;
console.log(climbStairs(n));

n = 8;
console.log(climbStairs(n));

n = 9;
console.log(climbStairs(n));

n = 45;
console.log(climbStairs(n));

// 2
// 1 + 1
// 2

// 3
// 1 + 1 + 1
// 1 + 2
// 2 + 1

// 4
// 1 + 1 + 1 + 1
// 1 + 1 + 2
// 1 + 2 + 1
// 2 + 1 + 1
// 2 + 2

// 5
// 1 + 1 + 1 + 1 + 1
// 1 + 1 + 1 + 2
// 1 + 1 + 2 + 1
// 1 + 2 + 1 + 1
// 1 + 2 + 2
// 2 + 1 + 1 + 1
// 2 + 1 + 2
// 2 + 2 + 1

// 6
// 1 + 1 + 1 + 1 + 1 + 1
// 1 + 1 + 1 + 1 + 2
// 1 + 1 + 1 + 2 + 1
// 1 + 1 + 2 + 1 + 1
// 1 + 1 + 2 + 2
// 1 + 2 + 1 + 1 + 1
// 1 + 2 + 1 + 2
// 1 + 2 + 2 + 1

// 2 + 1 + 1 + 1 + 1
// 2 + 1 + 1 + 2
// 2 + 1 + 2 + 1
// 2 + 2 + 1 + 1
// 2 + 2 + 2
