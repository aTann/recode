// 509. 斐波那契数
// https://leetcode-cn.com/problems/fibonacci-number/
/**
 * @param {number} n
 * @return {number}
 */
// 动态规划
// O(n)/O(1)
// 64ms/40.8MB
var fib = function (n) {
  let p = 0;
  let q = 1;
  let k = p;

  if (n === 1) {
    k = q;
  }

  for (let i = 2; i <= n; i++) {
    k = p + q;
    p = q;
    q = k;
  }

  return k;
};

// 递归
// O(n^2)/O(n^2)
// 84ms/41.3MB
var fib = function (n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
};

// [6.5 矩阵的运算及其运算规则](http://www2.edu-edu.com.cn/lesson_crs78/self/j_0022/soft/ch0605.html)
// 多项式
// O(logn)/O(1)
// 52ms/41MB
var fib = function (n) {
  if (n < 2) {
    return n;
  }

  const q = [
    [1, 1],
    [1, 0],
  ];
  const res = pow(q, n - 1);
  return res[0][0];
};

// [快速幂](https://oi-wiki.org/math/quick-pow/)
// 快速幂算法
const pow = function (a, n) {
  let ret = [
    [1, 0],
    [0, 1],
  ];

  while (n > 0) {
    if (n & 1) {
      ret = multiply(ret, a);
    }
    n >>= 1;
    a = multiply(a, a);
  }

  return ret;
};

const multiply = function (a, b) {
  let c = Array(2)
    .fill(0)
    .map((_) => Array(2).fill(0));

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      c[i][j] = a[0][i] * b[j][0] + a[1][i] * b[j][1];
    }
  }

  return c;
};

// [线性方程组](//zh.wikipedia.org/wiki/线性方程组)
// 通项公式
// 44ms/41.4MB
var fib = function (n) {
  const sqrt5 = Math.sqrt(5);
  const fibN = Math.pow((1 + sqrt5) / 2, n) - Math.pow((1 - sqrt5) / 2, n);
  return Math.round(fibN / sqrt5);
};

var n = 2;
console.log(fib(n));

var n = 3;
console.log(fib(n));

var n = 4;
console.log(fib(n));
