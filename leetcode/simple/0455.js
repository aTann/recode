// 455. 分发饼干
// https://leetcode-cn.com/problems/assign-cookies/
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */

// 排序 + 贪心
// O(mlogm + nlogn)/O(logm + logn)
// 88ms/44.3MB
var findContentChildren = function (g, s) {
  g = g.sort((p, n) => p - n);
  s = s.sort((p, n) => p - n);

  let i = 0,
    j = 0;
  let gLen = g.length,
    sLen = s.length;
  let ans = 0;

  while (i < gLen && j < sLen) {
    if (g[i] <= s[j]) {
      ans += 1;
      i += 1;
      j += 1;
    } else {
      j += 1;
    }
  }

  return ans;
};

var g = [1, 2, 3],
  s = [1, 1];
console.log(findContentChildren(g, s));

var g = [1, 2],
  s = [1, 2, 3];
console.log(findContentChildren(g, s));
