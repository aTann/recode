// 476. 数字的补数
// https://leetcode-cn.com/problems/number-complement/
/**
 * @param {number} num
 * @return {number}
 */
// 计算出位数，利用异或进行取反
// O(1) / O(1)
// 56ms/41.1MB
var findComplement = function (num) {
  let len = num.toString(2).length;
  return num ^ ((1 << len) - 1);
};

var num = 5;
console.log(findComplement(num));

var num = 1;
console.log(findComplement(num));
