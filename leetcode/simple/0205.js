// 205. 同构字符串
// https://leetcode-cn.com/problems/isomorphic-strings/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 利用 hashMap，s[i] => t[i] && t[i] => s[i]
// O(n)/O(n)
// 76ms/38.8MB
var isIsomorphic = function (s, t) {
  let sMap = new Map();
  let tMap = new Map();

  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    const tChar = t[i];

    if (
      (sMap.get(sChar) && sMap.get(sChar) !== tChar) ||
      (tMap.get(tChar) && tMap.get(tChar) !== sChar)
    ) {
      return false;
    } else {
      sMap.set(sChar, tChar);
      tMap.set(tChar, sChar);
    }
  }

  return true;
};

let s = "egg",
  t = "add";
console.log(isIsomorphic(s, t));

s = "foo";
t = "bar";
console.log(isIsomorphic(s, t));

s = "paper";
t = "title";
console.log(isIsomorphic(s, t));

s = "badc";
t = "baba";
console.log(isIsomorphic(s, t));
