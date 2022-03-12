// 28. 实现 strStr()
// https://leetcode-cn.com/problems/implement-strstr/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// 暴力解法，遍历，截取片段进行比较，滑动窗口
//  72ms/	39.3MB
// O(m-n)/O(1)
var strStr = function (haystack, needle) {
  if (!needle) {
    return 0;
  }

  var sourceLen = haystack.length;
  var targetLen = needle.length;
  var left = 0;
  while (left + targetLen <= sourceLen) {
    var cut = haystack.substring(left, left + targetLen);
    if (cut === needle) {
      return left;
    }
    left += 1;
  }

  return -1;
};

// 暴力解法，手动比对
// 1296ms / 39.6 MB
// O(mn) / O(1)
var strStr = function (haystack, needle) {
  if (!needle) {
    return 0;
  }

  var sourceLen = haystack.length;
  var targetLen = needle.length;
  var left = 0;
  while (left + targetLen <= sourceLen) {
    let ix = 0;
    for (; ix < targetLen; ix++) {
      const s = haystack[left + ix];
      const n = needle[ix];
      if (s !== n) {
        break;
      }
    }

    if (ix === targetLen) {
      return left;
    }

    left += 1;
  }

  return -1;
};

// KMP，Knuth-Morris-Pratt 算法
// 80ms/40.7MB
// O(m+n)/O(1)
var strStr = function (haystack, needle) {
  var n = haystack.length,
    m = needle.length;

  if (m === 0) {
    return 0;
  }

  var pi = [0];

  for (let i = 1, j = 0; i < m; i++) {
    while (j > 0 && needle[i] !== needle[j]) {
      j = pi[j - 1];
    }

    if (needle[i] === needle[j]) {
      j += 1;
    }

    pi[i] = j;
  }

  for (let i = 0, j = 0; i < n; i++) {
    while (j > 0 && haystack[i] !== needle[j]) {
      j = pi[j - 1];
    }

    if (haystack[i] === needle[j]) {
      j += 1;
    }

    if (j === m) {
      return i - m + 1;
    }
  }

  return -1;
};

var haystack = "",
  needle = "",
  r;

haystack = "hello";
needle = "ll";
r = strStr(haystack, needle);
console.log(r);

haystack = "aaaaa";
needle = "bba";
r = strStr(haystack, needle);
console.log(r);

haystack = "";
needle = "";
r = strStr(haystack, needle);
console.log(r);

haystack = "a";
needle = "a";
r = strStr(haystack, needle);
console.log(r);

haystack = "ababc";
needle = "abc";
r = strStr(haystack, needle);
console.log(r);

haystack = "mississippi";
needle = "issip";
r = strStr(haystack, needle);
console.log(r);

/**
 *
 * Knuth-Morris-Pratt 算法的核心为前缀函数，记作 π(i)，其定义如下：
 * 对于长度为 m 的字符串 s，其前缀函数 π(i)(0≤i<m) 表示 s 的子串 s[0:i] 的最长的相等的真前缀与真后缀的长度。特别地，如果不存在符合条件的前后缀，那么 π(i)=0。其中真前缀与真后缀的定义为不等于自身的的前缀与后缀。
 * 前缀函数的性质：
 * 1. π(i) <= π(i-1) + 1
 *    - 依据 π(i) 定义得：s[0:π(i) - 1] = s[i - π(i):i]
 *    - 将两个区间的右端点同时左移，可得：s[0:π(i) - 2] = s[i - π(i) + 1:i - 1]
 *    - 依据 π(i-1) 定义得：π(i - 1) >= π(i) - 1，即 π(i) <= π(i-1) + 1
 * 2. 如果 s[i] = s[π(i-1)]，那么 π(i) = π(i-1) + 1
 *    - 依据 π(i-1) 定义得：s[0:π(i - 1) - 1] = s[i - π(i - 1):i - 1]
 *    - 因为 s[π(i - 1)] = s[i]，可得 s[0:π(i - 1)] = s[i - π(i - 1):i]
 *    - 依据 π(i) 定义得：π(i) >= π(i - 1) + 1，结合第一个性质可得 π(i) = π(i - 1) + 1
 * 这样我们可以依据这两个性质提出求解 π(i) 的方案：找出最大的 j，满足 s[0:j - 1] = s[i - j:i - 1]，且 s[i] = s[j]（这样就有 s[0:j] = s[i-j:i]，即 π(i) = j + 1）
 * https://leetcode-cn.com/problems/implement-strstr/solution/shi-xian-strstr-by-leetcode-solution-ds6y/
 * 
 */
