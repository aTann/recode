// 66. 加一
// https://leetcode-cn.com/problems/plus-one/
/**
 * @param {number[]} digits
 * @return {number[]}
 */

// O(n)/O(1)
//  68ms/38.7MB
var plusOne = function (digits) {
  let len = digits.length;
  let i = len - 1;
  let flag = 1;
  while (digits[i] != null) {
    digits[i] = digits[i] + flag;
    if (digits[i] > 9) {
      digits[i] = 0;
      flag = 1;
    } else {
      flag = 0;
    }
    i -= 1;
  }

  if (flag) {
    i = len - 1;
    while (digits[i] != null) {
      digits[i + 1] = digits[i];
      i -= 1;
    }
    digits[0] = flag;
  }
  return digits;
};

// O(n)/O(1)
// 68 ms/37.8 MB
var plusOne = function (digits) {
  let len = digits.length;
  let i = len - 1;
  let flag = 1;
  while (digits[i] != null) {
    // 直接相加
    digits[i] = digits[i] + flag;
    // 大于 9
    if (digits[i] > 9) {
      // 置 0
      digits[i] = 0;
      // 进位
      flag = 1;
    } else {
      flag = 0;
    }
    i -= 1;
  }

  // 最后还有进位，需要在头部添加 1
  if (flag) {
    digits.unshift(flag);
  }
  return digits;
};

// 题解
// 逆序，寻找不是 9 的位置添加 1 即可，如果全是 9，构造一个 n+1 数列头部是 1 即可
var plusOne = function (digits) {
  let len = digits.length;
  let i = len - 1;
  while (i >= 0) {
    if (digits[i] === 9) {
      digits[i] = 0;
    } else {
      digits[i] += 1;
      return digits;
    }

    i -= 1;
  }

  // 72ms/38.5MB	
  // digits.unshift(1);
  // 64ms/38.7MB
  let ans = new Array(len + 1).fill(0);
  ans[0] = 1;

  return ans;
};

var digits, r;

digits = [1, 2, 3];
r = plusOne(digits);
console.log(r);

digits = [9, 9, 9];
r = plusOne(digits);
console.log(r);
