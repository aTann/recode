// 344. 反转字符串
// https://leetcode-cn.com/problems/reverse-string/
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
// 双指针
// O(n)/O(1)
// 88ms/47.2MB
var reverseString = function (s) {
  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    [s[i], s[j]] = [s[j], s[i]];
    i += 1;
    j -= 1;
  }
};

let s = ["h", "e", "l", "l", "o"];
reverseString(s);
console.log(s);

s = ["H", "a", "n", "n", "a", "h"];
reverseString(s);
console.log(s);
