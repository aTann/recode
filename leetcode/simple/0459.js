// 459. 重复的子字符串
// https://leetcode-cn.com/problems/repeated-substring-pattern/

/**
 *
 * 给定一个非空的字符串 s ，检查是否可以通过由它的一个子串重复多次构成。
 *
 * 示例 1:
 * 输入: s = "abab"
 * 输出: true
 * 解释: 可由子串 "ab" 重复两次构成。
 *
 * 示例 2:
 * 输入: s = "aba"
 * 输出: false
 *
 * 示例 3:
 * 输入: s = "abcabcabcabc"
 * 输出: true
 * 解释: 可由子串 "abc" 重复四次构成。 (或子串 "abcabc" 重复两次构成。)
 *
 */

/**
 * @param {string} s
 * @return {boolean}
 */
// 双指针
// O(n)/O(n)
// 92ms/47.6MB
var repeatedSubstringPattern = function (s) {
  let len = s.length;
  let i = 0,
    k = len - 1;
  let left = "",
    right = "";

  while (i < k) {
    left += s[i];
    right = s[k] + right;
    if (left === right) {
      let div = len / left.length;
      if ((div = parseInt(div, 10) && left.padEnd(len, left) === s)) {
        return true;
      }
    }
    i += 1;
    k -= 1;
  }
  return false;
};

// 字符串匹配
// 56ms/43.4MB
var repeatedSubstringPattern = function (s) {
  return (s + s).slice(1, (s + s).length - 1).indexOf(s) !== -1;
};

// KMP
// O(n)/O(n)
// 88ms/48MB
function kmp(query, pattern) {
  let qLen = query.length,
    pLen = pattern.length;
  let pi = [0];

  for (let i = 1, j = 0; i < pLen; i++) {
    if (j > 0 && pattern[i] !== pattern[j]) {
      j = pi[j - 1];
    }

    if (pattern[i] === pattern[j]) {
      j += 1;
    }

    pi[i] = j;
  }

  let match = 0;

  for (let k = 1; k < qLen - 1; k++) {
    if (match > 0 && pattern[match] !== query[k]) {
      match = pi[match - 1];
    }
    if (pattern[match] === query[k]) {
      match += 1;
      if (match === pLen) {
        return true;
      }
    }
  }

  return false;
}
var repeatedSubstringPattern = function (s) {
  return kmp(s + s, s);
};

// 优化的 KMP

var s = "abbaabba";
console.log(repeatedSubstringPattern(s));

var s = "aba";
console.log(repeatedSubstringPattern(s));

var s = "abcabcabcabc";
console.log(repeatedSubstringPattern(s));

var s = "abcabcabc";
console.log(repeatedSubstringPattern(s));

var s = "aabaaba";
console.log(repeatedSubstringPattern(s));
