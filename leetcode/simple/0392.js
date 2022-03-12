// 392. 判断子序列
// https://leetcode-cn.com/problems/is-subsequence/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 双指针
// O(t)/O(1)
// 56ms/41.2MB
var isSubsequence = function (s, t) {
  let k = 0;
  const sLen = s.length;
  for (let i = 0; i < t.length; i++) {
    if (t[i] === s[k]) {
      k += 1;
    }

    // 提前退出
    if (k === sLen) {
      return true;
    }
  }

  // “” === “” 情况需要考虑
  return k === sLen;
};

// 动态规划，状态转移
var isSubsequence = function (s, t) {
  const tLen = t.length;
  const f = Array(tLen)
    .fill([])
    .map((i) => Array(26));

  f[tLen] = Array(26)
    .fill(0)
    .map((_) => tLen);

  for (let i = tLen - 1; i >= 0; i--) {
    for (let j = 0; j < 26; j++) {
      if (t[i].charCodeAt() === j + "a".charCodeAt()) {
        f[i][j] = i;
      } else {
        f[i][j] = f[i + 1][j];
      }
    }
  }

  let k = 0;
  for (let i = 0; i < s.length; i++) {
    let c = s[i].charCodeAt() - "a".charCodeAt();
    // 表示该字符在字符串中不存在
    if (f[k][c] === tLen) {
      return false;
    }
    k = f[k][c] + 1;
  }

  return true;
};

let s = "abc";
let t = "ahbgdc";
console.log(isSubsequence(s, t));

s = "axc";
t = "ahbgdc";
console.log(isSubsequence(s, t));
