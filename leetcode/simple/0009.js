// 9. 回文数
// https://leetcode-cn.com/problems/palindrome-number/
// 翻转比较
var isPalindrome = function (x) {
  if (x < 0 || (x % 10 == 0 && x != 0)) {
    return false;
  }

  const reversed = x.toString().split("").reverse().join("");

  if (x.toString() === reversed) {
    return true;
  }
  return false;
};

// 字符比较
var isPalindrome = function (x) {
  if (x < 0 || (x % 10 == 0 && x != 0)) {
    return false;
  }

  const text = x.toString();
  let l = 0,
    r = text.length - 1;

  while (l < r) {
    if (text.charAt(l) !== text.charAt(r)) {
      return false;
    }

    l += 1;
    r -= 1;
  }

  return true;
};

// 纯数字比较
var isPalindrome = function (x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }

  let help = 1;
  let temp = x;

  while (temp > 10) {
    help *= 10;
    temp /= 10;
  }

  while (x != 0) {
    if (parseInt(x / help, 10) != x % 10) {
      return false;
    }
    x = parseInt((x % help) / 10, 10); // % 去头，/ 配合 parseInt 除尾
    help /= 100; // 每次去掉头尾 2 位
  }

  return true;
};

// 纯数字
var isPalindrome = function (x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }

  let reversed = 0;
  while (x > reversed) {
    reversed = reversed * 10 + (x % 10);
    x = parseInt(x / 10, 10);
  }

  return x === reversed || x === parseInt(reversed / 10, 10);
};

const r = isPalindrome(121);
console.log(r);
