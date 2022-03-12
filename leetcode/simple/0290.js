// 290. 单词规律
// https://leetcode-cn.com/problems/word-pattern/
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
// HashMap，即任意一个字符都对应着唯一的字符串，任意一个字符串也只被唯一的一个字符对应。在集合论中，这种关系被称为「双射」
// O(m + n)/O(m + n)
// 60ms/41.1MB
var wordPattern = function (pattern, s) {
  let words = s.split(" ");

  if (words.length !== pattern.length) {
    return false;
  }

  const m = new Map();
  const n = new Map();

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    const word = words[i];

    // 其中一个存在，模式错误
    if (
      (m.has(char) && m.get(char) !== word) ||
      (n.has(word) && n.get(word) !== char)
    ) {
      return false;
    } else if (!m.has(char) && !n.has(word)) {
      m.set(char, word);
      n.set(word, char);
    }
  }

  return true;
};

var pattern = "abba",
  str = "dog cat cat dog";
console.log(wordPattern(pattern, str));

var pattern = "abba",
  str = "dog cat cat fish";
console.log(wordPattern(pattern, str));

var pattern = "aaaa",
  str = "dog cat cat dog";
console.log(wordPattern(pattern, str));

var pattern = "abba",
  str = "dog dog dog dog";
console.log(wordPattern(pattern, str));

var pattern = "aba",
  str = "dog cat cat";
console.log(wordPattern(pattern, str));
