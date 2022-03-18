// 482. 密钥格式化
// https://leetcode-cn.com/problems/license-key-formatting/
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
// 利用正则转换为字符，从后往前取 k 个进行处理
// O(n)/O(1)
// 64ms/45.7MB
var licenseKeyFormatting = function (s, k) {
  s = s.replace(/\-/g, "").toUpperCase();
  let ans = "";

  while (s.length) {
    ans = s.slice(-k) + "-" + ans;
    s = s.slice(0, -k);
  }

  return ans.slice(0, -1);
};

// O(n)/O(1)
// 92ms/46.2MB
var licenseKeyFormatting = function (s, k) {
  s = s.toUpperCase();
  let len = s.length;
  let ans = "";
  let count = 0;

  for (let i = len - 1; i >= 0; i -= 1) {
    const char = s[i];
    if (char !== "-") {
      count += 1;
      ans = char + ans;

      if (count % k === 0) {
        ans = "-" + ans;
      }
    }
  }


  return ans.slice(ans[0] === '-');
};

var s = "5F3Z-2e-9-w",
  k = 4;
console.log(licenseKeyFormatting(s, k));

var s = "2-5g-3-J",
  k = 2;
console.log(licenseKeyFormatting(s, k));

var s = "2-4A0r7-4k",
  k = 4;
console.log(licenseKeyFormatting(s, k));

var s = "2-4A0r7-4k",
  k = 1;
console.log(licenseKeyFormatting(s, k));
