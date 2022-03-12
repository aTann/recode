// 383. 赎金信
// https://leetcode-cn.com/problems/ransom-note/
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
// HashMap
// O(m+n)/O(|S|) S=26
// 84ms/42.1MB
var canConstruct = function (ransomNote, magazine) {
  var map = {};
  for (let i = 0; i < magazine.length; i += 1) {
    const char = magazine[i];
    if (map[char]) {
      map[char] += 1;
    } else {
      map[char] = 1;
    }
  }

  for (let k = 0; k < ransomNote.length; k += 1) {
    const char = ransomNote[k];
    if (map[char]) {
      map[char] -= 1;
    } else {
      // map[char] === 0 || map[char]=== undefined
      return false;
    }
  }

  return true;
};

var ransomNote = "a",
  magazine = "b";
console.log(canConstruct(ransomNote, magazine));

var ransomNote = "aa",
  magazine = "ab";
console.log(canConstruct(ransomNote, magazine));

var ransomNote = "aa",
  magazine = "aab";
console.log(canConstruct(ransomNote, magazine));
