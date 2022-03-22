// 500. 键盘行
// https://leetcode-cn.com/problems/keyboard-row/
/**
 * @param {string[]} words
 * @return {string[]}
 */
// 暴力法
// O(sum(n1,n2,n3))/O(1)
// 68ms/40.9MB
const keyboard = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
const map = new Map();
keyboard.forEach((strs, idx) => {
  [...strs].forEach((char) => map.set(char, idx));
});
var findWords = function (words) {
  const ans = [];
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const idx = keyboard.findIndex(
      (i) => i.indexOf(word[0].toLowerCase()) > -1
    );

    const isAllIn = word
      .split("")
      .every((item) => keyboard[idx].indexOf(item.toLowerCase()) > -1);
    if (isAllIn) {
      ans.push(word);
    }
  }

  return ans;
};

// O(n)/O(n)
// 64ms/41.2MB
var findWords = function (words) {
  const ans = [];
  for (let i = 0; i < words.length; i++) {
    const word = new Set([...words[i].toLowerCase()]);
    let expect = -1;
    for (const char of word) {
      if (expect !== -1) {
        if (expect !== map.get(char.toLowerCase())) {
          expect = -1;
          break;
        }
      } else {
        expect = map.get(char.toLowerCase());
      }
    }

    if (expect !== -1) {
      ans.push(words[i]);
    }
  }

  return ans;
};

// Set 唯一性属性，融合后长度等于单列长度
// O(n)/O(max(n)*26)
// 52ms/41.MB
var findWords = function (words) {
  const ans = [];

  for (let i = 0; i < words.length; i++) {
    const w = words[i];
    for (let k = 0; k < keyboard.length; k++) {
      const keys = keyboard[k];
      const set = new Set([...keys, ...w.toLowerCase()]);
      if (keys.length === set.size) {
        ans.push(w);
      }
    }
  }

  return ans;
};

// 题解
var findWords = function(words) {
  const list = [];
  const rowIdx = "12210111011122000010020202";
  for (const word of words) {
      let isValid = true;
      const idx = rowIdx[word[0].toLowerCase().charCodeAt() - 'a'.charCodeAt()];
      for (let i = 1; i < word.length; ++i) {
          if (rowIdx[word[i].toLowerCase().charCodeAt() - 'a'.charCodeAt()] !== idx) {
              isValid = false;
              break;
          }
      }
      if (isValid) {
          list.push(word);
      }
  }
  return list;
};


var words = ["Hello", "Alaska", "Dad", "Peace"];
console.log(findWords(words));

var words = ["omk"];
console.log(findWords(words));

var words = ["adsdf", "sfd"];
console.log(findWords(words));
