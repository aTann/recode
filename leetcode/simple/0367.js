// 367. 有效的完全平方数
// https://leetcode-cn.com/problems/valid-perfect-square/
/**
 * @param {number} num
 * @return {boolean}
 */
// 二分，[low, high) 左闭右开
// O(logn)/O(1)
// 52ms/41.2
var isPerfectSquare = function (num) {
  if (num < 2) {
    return true;
  }

  let high = num;
  let low = 0;
  let mid = -1;

  while (low < high) {
    let mid = low + ((high - low) >> 1);

    let n = mid * mid;
    if (n > num) {
      high = mid;
    } else if (n < num) {
      low = mid + 1;
    } else {
      return true;
    }
  }

  return false;
};

// 牛顿迭代
// [泰勒级数](https://zh.wikipedia.org/wiki/泰勒级数)
// [导数](//zh.wikipedia.org/wiki/导数)
// [常用求导公式（演算过程）](http://math001.com/derivation_formula/)
// [怎样更好地理解并记忆泰勒展开式？ - 知乎用户P17e01的回答 - 知乎](https://www.zhihu.com/question/25627482/answer/313088784)
// [雷神之锤](https://zh.wikipedia.org/wiki/平方根倒数速算法)
// [如何通俗易懂地讲解牛顿迭代法求开方（数值分析）？ - 秋水的回答 - 知乎](https://www.zhihu.com/question/20690553/answer/543620219)

// O(logn)/O(1)  O(log4(n))
// 60ms/41.3MB
var isPerfectSquare = function (num) {
  let x0 = num;
  while (true) {
    const x1 = Math.floor((x0 + num / x0) / 2);
    if (x0 - x1 < 1e-10) {
      break;
    }
    x0 = x1;
  }

  return x0 * x0 === num;
};

var isPerfectSquare = function (num) {
  let i, x2, y;
};

let num = 16;
console.log(isPerfectSquare(num));

num = 14;
console.log(isPerfectSquare(num));
