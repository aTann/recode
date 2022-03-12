// 208. 实现 Trie (前缀树)
// https://leetcode-cn.com/problems/implement-trie-prefix-tree/
// Trie（发音类似 "try"）或者说 前缀树 是一种树形数据结构，用于高效地存储和检索字符串数据集中的键。这一数据结构有相当多的应用情景，例如自动补完和拼写检查。

// 利用对象，对存在的字符串的位置做 flag 处理
// 172ms/56.7MB
var Trie = function () {
  this.trie = {};
};

/**
 * @param {string} word
 * @return {void}
 */
// O(n)/O(n)
Trie.prototype.insert = function (word) {
  let next = this.trie;
  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    if (next[char] == null) {
      next[char] = {};
    }
    next = next[char];
  }
  next.flag = 1;
};

/**
 * @param {string} word
 * @return {boolean}
 */
// O(n)/O(1)
Trie.prototype.search = function (word) {
  let next = this.trie;
  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    if (next[char] == null) {
      return false;
    }
    next = next[char];
  }

  return !!next.flag;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
// O(n)/O(1)
Trie.prototype.startsWith = function (prefix) {
  let next = this.trie;
  for (let i = 0; i < prefix.length; i++) {
    const char = prefix[i];
    if (next[char] == null) {
      return false;
    }
    next = next[char];
  }
  return next != null;
};

// https://oi-wiki.org/string/trie/
// 未实现
const MAX_LENGTH = 2000;
var Trie = function () {
  this.nex = Array(MAX_LENGTH)
    .fill([])
    .map((i) => Array(26));
  this.exist = Array(MAX_LENGTH);
  this.cnt = 1;
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  const { nex, exist } = this;
  let { cnt } = this;
  let p = 0;
  for (let i = 0; i < word.length; i++) {
    const c = word[i].charCodeAt() - "a".charCodeAt();
    if (!nex[p][c]) {
      nex[p][c] = cnt;
      cnt += 1;
    }
    p = nex[p][c];
    this.cnt = cnt;
  }
  // console.log(p);
  exist[p] = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
// O(n)/O(1)
Trie.prototype.search = function (word) {
  let p = 0;
  const { nex, exist } = this;
  for (let i = 0; i < word.length; i++) {
    const c = word[i].charCodeAt() - "a".charCodeAt();
    // console.log(c, nex[p][c]);
    if (!nex[p][c]) {
      return false;
    }
    p = nex[p][c];
  }
  
  return !!exist[p];
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
// O(n)/O(1)
Trie.prototype.startsWith = function (prefix) {
  let p = 0;
  const { nex } = this;
  for (let i = 0; i < prefix.length; i++) {
    const c = prefix[i].charCodeAt() - "a".charCodeAt();
    if (!nex[p][c]) {
      return false;
    }
    p = nex[p][c];
  }
  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

const t = new Trie();
t.insert("apple");
console.log(t.search("apple"));
console.log(t.search("app"));
console.log(t.startsWith("app"));
t.insert("app");
console.log(t.search("app"));
