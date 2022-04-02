// 551. 学生出勤记录 I
// https://leetcode-cn.com/problems/student-attendance-record-i/
/**
 * @param {string} s
 * @return {boolean}
 */
// 模拟
// O(1)/O(1)，使用内部函数，视语言实现情况而定
// 60ms/41.2MB
var checkRecord = function (s) {
  let m = s.length;

  if (s.indexOf("LLL") > -1) {
    return false;
  }
  if (s.replace(/[^A]/g, "").length >= 2) {
    return false;
  }

  return true;
};

// 模拟，遍历
// O(n)/O(1)
// 52ms/40.9MB
var checkRecord = function (s) {
  let len = s.length;
  let a = 0;
  let l = 0;

  for (let i = 0; i < len; i++) {
    if (s[i] === "L") {
      l += 1;
    } else {
      l = 0;
      if (s[i] === "A") {
        a += 1;
      }
    }

    if (l >= 3 || a >= 2) {
      return false;
    }
  }

  return true;
};
