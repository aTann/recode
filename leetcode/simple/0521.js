// 521. 最长特殊序列 Ⅰ
// https://leetcode-cn.com/problems/longest-uncommon-subsequence-i/
/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
// 脑筋急转弯
// O(1)/O(1)
// 44ms/40.8MB
var findLUSlength = function (a, b) {
  let ans = 0;

  if (a === b) {
    ans = -1;
  } else {
    ans = Math.max(a.length, b.length);
  }

  return ans || -1;
};

var a = "aba",
  b = "cdc";
console.log(findLUSlength(a, b));

var a = "aaa",
  b = "bbb";
console.log(findLUSlength(a, b));

var a = "aaa",
  b = "aaa";
console.log(findLUSlength(a, b));

var a = "aefawfawfawfaw",
  b = "aefawfeawfwafwaef";
console.log(a.length, b.length);
console.log(findLUSlength(a, b));

var a = "horbxeemlgqpqbujbdagizcfairalg",
  b = "iwvtgyojrfhyzgyzeikqagpfjoaeen";
console.log(a.length, b.length);
console.log(findLUSlength(a, b));
