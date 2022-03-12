// 345. 反转字符串中的元音字母
// https://leetcode-cn.com/problems/reverse-vowels-of-a-string/
/**
 * @param {string} s
 * @return {string}
 */
// 双指针
// O(n)/O(n)
// 60ms/47.1MB
var reverseVowels = function (s) {
  let m = 0,
    n = s.length - 1;

  let v = [...s];

  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  while (m < n) {
    while (m < n && !vowels.includes(v[m])) {
      m += 1;
    }

    while (m < n && !vowels.includes(v[n])) {
      n -= 1;
    }

    [v[m], v[n]] = [v[n], v[m]];
    m += 1;
    n -= 1;
  }

  return v.join("");
};

// 双指针
// O(n)/O(1)
// 60ms/46.3MB
var reverseVowels = function (s) {
  let m = 0,
    n = s.length - 1;

  let v = "",
    u = "";

  const letters = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  while (m < n) {
    while (m < n && !letters.includes(s[m])) {
      v += s[m];
      m += 1;
    }

    while (m < n && !letters.includes(s[n])) {
      u = s[n] + u;
      n -= 1;
    }

    if (m < n) {
      v += s[n];
      u = s[m] + u;

      m += 1;
      n -= 1;
    }
  }

  if (m === n) {
    v += s[m]
  }

  return v  + u;
};

let s = "eio";
console.log(reverseVowels(s));

s = "hello";
console.log(reverseVowels(s));

s = "leetcode";
console.log(reverseVowels(s));
