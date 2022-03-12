// 69. Sqrt(x)
// https://leetcode-cn.com/problems/sqrtx/

/**
 * @param {number} x
 * @return {number}
 */

// 逐一遍历
// 128ms/39.3MB
var mySqrt = function (x) {
  const { MAX_SAFE_INTEGER } = Number;

  for (let i = 0; i < MAX_SAFE_INTEGER; i++) {
    if (i * i === x) {
      return i;
    }
    if (i * i > x) {
      return i - 1;
    }
  }
};

// 二分法
// O(logN) / O(1)
// 88ms/39.2MB
var mySqrt = function (x) {
  let low = 0,
    high = x,
    mid = high;

  while (low <= high) {
    mid = high - ((high - low) >> 1);

    if (mid * mid === x) {
      return mid;
    } else if (mid * mid > x) {
      if ((mid - 1) * (mid - 1) < x) {
        return mid - 1;
      }

      high = mid;
    } else {
      if ((mid + 1) * (mid + 1) > x) {
        return mid;
      }

      low = mid;
    }
  }

  return mid;
};

// 会因为精度问题出现错误
var mySqrt = function (x) {

  if (x === 0 || x === 1) {
    return x
  }

  let low = 0,
    high = x,
    mid = high;

  while (low <= high) {
    mid = low + (high - low) / 2;

    // console.log(mid);

    if (Math.abs(mid * mid - x) <= 0.0001) {
      return parseInt(mid, 10);
    } else if (mid * mid > x) {
      high = mid;
    } else {
      low = mid;
    }
  }

  return parseInt(mid, 10);
};


// 牛顿迭代
// O(logx)/O(1)，此方法是二次收敛的，相较于二分查找更快
// 80ms/39.2MB
var mySqrt = function (x) {
  if (x == 0) {
    return 0;
  }

  let C = x,
    x0 = x;

  while (1) {
    let xi = 0.5 * (x0 + C / x0);
    if (Math.abs(x0 - xi) < Number.EPSILON) {
      break;
    }

    x0 = xi;
  }

  return x0;
  // return parseInt(x0, 10);
};

let x;

x = 0;
console.log(mySqrt(x));

x = 1;
console.log(mySqrt(x));

x = 4;
console.log(mySqrt(x));

x = 8;
console.log(mySqrt(x));

x = 9;
console.log(mySqrt(x));

x = 10;
console.log(mySqrt(x));
