// 387. 字符串中的第一个唯一字符
// https://leetcode-cn.com/problems/first-unique-character-in-a-string/
/**
 * @param {string} s
 * @return {number}
 */
// hashMap
// O(n)/O(|S|), S = 26
// 84ms/44.5MB
var firstUniqChar = function (s) {
  var map = {};
  for (let i = 0; i < s.length; i++) {
    const p = s[i];
    if (map[p] != null) {
      map[p] = -1;
    } else {
      map[p] = i;
    }
  }

  let m = "";
  for (m in map) {
    if (map[m] > -1) {
      break;
    }
  }

  return map[m];
};

// 队列
// O(n)/O(|S|)
// 92ms/44.2MB
var firstUniqChar = function (s) {
  let pos = {};
  let q = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (pos[char] == null) {
      pos[char] = i;
      q.push([s[i], i]);
    } else {
      pos[char] = -1;
      while (q.length && pos[q[0][0]] === -1) {
        q.shift();
      }
    }
  }

  return q.length ? q[0][1] : -1;
};

var s = "leetcode";
console.log(firstUniqChar(s));

var s = "loveleetcode";
console.log(firstUniqChar(s));

var s = "aabb";
console.log(firstUniqChar(s));
