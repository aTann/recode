// 20. 有效的括号
// https://leetcode-cn.com/problems/valid-parentheses/
/**
 * @param {string} s
 * @return {boolean}
 */
// 暴力法，先存储符号，遇到相同的符号则推出，最后如果是空栈则是匹配的
var isValid = function (s) {
  const len = s.length;

  if (len % 2 !== 0) {
    return false;
  }

  if (s[0] === ")" || s[0] === "]" || s[0] === "}") {
    return false;
  }

  let pos = 0;
  const cache = [];
  const map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  // 执行用时：76 ms
  // 内存消耗：38 MB
  // while (pos < len) {
  //   if (s[pos] === "(" || s[pos] === "[" || s[pos] === "{") {
  //     cache.push(s[pos]);
  //   } else if (s[pos] === map[cache[cache.length - 1]]) {
  //     cache.pop();
  //   } else {
  //     return false;
  //   }
  //   pos += 1;
  // }

  // 执行用时：60 ms, 在所有 JavaScript 提交中击败了 98.36% 的用户
  // 内存消耗：38.1 MB, 在所有 JavaScript 提交中击败了66.41% 的用户
  while (pos < len) {
    if (s[pos] === "(" || s[pos] === "[" || s[pos] === "{") {
      cache.push(s[pos]);
    } else if (s[pos] !== map[cache.pop()]) { // pop 本来就是要做的
      return false;
    } 
    pos += 1;
  }

  return !cache.length;
};

// 消除法
var isValid = function (s) {
  const len = s.length;

  if (len % 2 !== 0) {
    return false;
  }

  if (s[0] === ")" || s[0] === "]" || s[0] === "}") {
    return false;
  }

  let preLen = 0;
  while (preLen !== s.length) {
    preLen = s.length;
    s = s.replace(/\(\)/g, "").replace(/\[\]/g, "").replace(/\{\}/g, "");
    console.log(s.length, preLen);
  }
  console.log(s);
  return !s;
};

var s = "()";
var r = isValid(s);
console.log(r);

s = "()[]{}";
r = isValid(s);
console.log(r);

s = "{[]}";
r = isValid(s);
console.log(r);

s = "([()]]";
r = isValid(s);
console.log(r);

s = "(]";
r = isValid(s);
console.log(r);
