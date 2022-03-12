// 58. 最后一个单词的长度
// https://leetcode-cn.com/problems/length-of-last-word/
/**
 * @param {string} s
 * @return {number}
 */
// O(n)/O(1)
//  80ms/39MB
var lengthOfLastWord = function (s) {
  let ready = false;
  let len = s.length;
  let last = 0;

  for (let ix = 0; ix < len; ix++) {
    const cur = s[ix];
    if (cur === " ") {
      if (ready) {
        ready = false;
      }
    } else {
      if (!ready) {
        last = 1;
        ready = true;
      } else {
        last += 1;
      }
    }
  }

  return last;
};

// 逆向
// O(n)/O(1)
// 76ms/37.5MB
var lengthOfLastWord = function (s) {
  let i = s.length - 1;

  let len = 0;

  while (i >= 0) {
    if (s[i] !== " ") {
      len += 1;
    } else if (len > 0) {
      return len;
    }
    i -= 1;
  }

  return len;
};

var s, r;

s = "Hello World";
r = lengthOfLastWord(s);
console.log(r);

s = "   fly me   to   the moon  ";
r = lengthOfLastWord(s);
console.log(r);

s = "luffy is still joyboy";
r = lengthOfLastWord(s);
console.log(r);
