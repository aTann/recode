// 242. 有效的字母异位词
// https://leetcode-cn.com/problems/valid-anagram/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// 字数、排序
// O(nlogn)/O(logn)
// 92ms/48.2MB
var isAnagram = function (s, t) {
  return s.length === t.length && [...s].sort().join() === [...t].sort().join();
};

// hashMap
// O(n)/O(Set(n))
// 80ms/41.9MB
var isAnagram = function (s, t) {

  if (s.length !== t.length) {
    return false
  }

  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (map.has(ch)) {
      map.set(ch, map.get(ch) + 1);
    } else {
      map.set(ch, 1);
    }
  }

  for (let j = 0; j < t.length; j++) {
    const ch = t[j];
    if (map.has(ch)) {
      let count = map.get(ch) - 1
      map.set(ch, count);
      if (count < 0) {
        return false;
      }
    } else {
      return false;
    }
  }

  return true
};

var s = "anagram",
  t = "nagaram";
console.log(isAnagram(s, t));
