// 171. Excel 表列序号
// https://leetcode-cn.com/problems/excel-sheet-column-number/

/**
 * @param {string} columnTitle
 * @return {number}
 */
// 26 进制处理使用
// O(n)/O(1)
// 76ms/39.4MB
var titleToNumber = function (columnTitle) {
  let len = columnTitle.length - 1;
  let acc = 0;
  let idx = len;

  while (idx >= 0) {
    let cur = columnTitle[idx];
    acc = acc + (cur.charCodeAt() - "A".charCodeAt() + 1) * 26 ** (len - idx);
    idx -= 1;
  }

  return acc;
};

// 题解
var titleToNumber = function (columnTitle) {
  let len = columnTitle.length - 1;
  let acc = 0;
  let idx = len;
  let multiple = 1;

  while (idx >= 0) {
    let cur = columnTitle[idx];
    let k = cur.charCodeAt() - "A".charCodeAt() + 1;
    
    acc += k * multiple;
    multiple *= 26;
    idx -= 1;
  }

  return acc;
};

let columnTitle;

columnTitle = "A";
console.log(titleToNumber(columnTitle));

columnTitle = "AB";
console.log(titleToNumber(columnTitle));

columnTitle = "ZY";
console.log(titleToNumber(columnTitle));

columnTitle = "FXSHRXW";
console.log(titleToNumber(columnTitle));
