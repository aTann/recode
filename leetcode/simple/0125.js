// 125. 验证回文串
// https://leetcode-cn.com/problems/valid-palindrome/
/**
 * @param {string} s
 * @return {boolean}
 */

// 正则 + 双指针
// O(n)/O(1)
// 136ms/41.7MB
var isPalindrome = function (s) {
  let start = 0;
  let end = s.length - 1;
  let reg = /[A-Za-z0-9]/;
  while (start < end) {
    let v = s[start].toLowerCase();
    let u = s[end].toLowerCase();

    if (reg.test(v) && reg.test(u)) {
      if (v === u) {
        start += 1;
        end -= 1;
      } else {
        return false;
      }
    } else {
      if (!reg.test(v)) {
        start += 1;
      }

      if (!reg.test(u)) {
        end -= 1;
      }
    }
  }

  return true;
};

// charCodeAt
// O(n)/O(1)
// 72ms/41.3MB
var isPalindrome = function (s) {
  let start = 0;
  let end = s.length - 1;
  // 88ms/41.4MB
  // let isValid = (c) => {
  //   let code = c.charCodeAt();
  //   return (
  //     (code > 47 && code < 58) ||
  //     (code > 64 && code < 91) ||
  //     (code > 96 && code < 123)
  //   );
  // };
  // 72ms/41.3MB
  let isValid = (c) => (c >= "a" && c <= "z") || (c >= "0" && c <= "9");

  while (start < end) {
    let v = s[start].toLowerCase();
    let u = s[end].toLowerCase();

    if (isValid(v) && isValid(u)) {
      if (v === u) {
        start += 1;
        end -= 1;
      } else {
        return false;
      }
    } else {
      if (!isValid(v)) {
        start += 1;
      }

      if (!isValid(u)) {
        end -= 1;
      }
    }
  }

  return true;
};

// O(n)/O(n)
// 92ms/44.8MB
var isPalindrome = function (s) {
  let isValid = (c) => {
    let code = c.charCodeAt();
    return (
      (code > 47 && code < 58) ||
      (code > 64 && code < 91) ||
      (code > 96 && code < 123)
    );
  };

  let p = "";
  let t = "";

  while (s) {
    let q = s[0];

    if (isValid(q)) {
      p += q.toLowerCase();
    }
    s = s.slice(1);
  }

  while (t.length < p.length) {
    t = p[0] + t;
    p = p.slice(1);
  }

  return p === t || p === t.slice(1);
};

let s = "";
console.log(isPalindrome(s));

s = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s));

s = "race a car";
console.log(isPalindrome(s));
