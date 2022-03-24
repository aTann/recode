// 504. 七进制数
// https://leetcode-cn.com/problems/base-7/
/**
 * @param {number} num
 * @return {string}
 */

// 模拟，倒推+迭代
// O(logn)/O(1)
// 64ms/41.3MB
var convertToBase7 = function (num) {
  let ans = "";
  let carry = 1;
  const flag = num >= 0 ? "" : "-";
  if (num === 0) {
    ans = "0";
  }

  while (num) {
    ans = Math.abs(num % 7 ** carry) + ans;
    num = parseInt(num / 7 ** carry);
  }

  return flag + ans;
};

var num = 0;
console.log(convertToBase7(num));

var num = 101;
console.log(convertToBase7(num));

var num = -7;
console.log(convertToBase7(num));
