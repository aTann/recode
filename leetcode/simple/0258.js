// 258. 各位相加
// https://leetcode-cn.com/problems/add-digits/
/**
 * @param {number} num
 * @return {number}
 */
// 数学计算
// O(n)/O(1)
// 68ms/42.8MB
var addDigits = function (num) {
  while (num > 9) {
    let t = 0;
    k += 1;
    while (num > 0) {
      let n = num % 10;
      t += n;
      num = parseInt(num / 10, 10);
      i += 1;
    }
    num = t;
  }

  return num;
};

// 转换为字符，然后利用数组的 reduce
// O(n)/O(n)
// 72ms/42.8MB
var addDigits = function (num) {
  while (num > 9) {
    num = Array.from("" + num).reduce((a, c) => a + Number(c), 0);
  }
  return num;
};

// 数学，求 9 的余数，类似求被 3 整除
// O(1)/O(1)
// 72ms/41.4MB
var addDigits = function (num) {
  return (num - 1) % 9 + 1
};

let num = 0;
console.log(addDigits(num));

num = 38;
console.log(addDigits(num));

num = 99;
console.log(addDigits(num));

num = 999;
console.log(addDigits(num));

num = 9999999999999999;
console.log(addDigits(num));
