// 168. Excel表列名称
// https://leetcode-cn.com/problems/excel-sheet-column-title/

/**
 * @param {number} columnNumber
 * @return {string}
 */
// 26 进值转换
// O(n)/O(1)
// 72ms/37.6MB
var map = {
  0: "Z",
  1: "A",
  2: "B",
  3: "C",
  4: "D",
  5: "E",
  6: "F",
  7: "G",
  8: "H",
  9: "I",
  10: "J",
  11: "K",
  12: "L",
  13: "M",
  14: "N",
  15: "O",
  16: "P",
  17: "Q",
  18: "R",
  19: "S",
  20: "T",
  21: "U",
  22: "V",
  23: "W",
  24: "X",
  25: "Y",
};
// O(log26columnNumber)
var convertToTitle = function (columnNumber) {
  var p = "";
  while (columnNumber) {
    let mod = columnNumber % 26;
    p = map[mod] + p;

    columnNumber = (columnNumber - (mod || 26)) / 26;
  }

  return p;
};

// 利用 toString(radix) + parseInt(n, radix)
var convertToTitle = function (columnNumber) {
  var p = "";
  var n26 = columnNumber.toString(26);
  var carry = 0;
  while (n26) {
    let q = n26.slice(-1);
    let code = parseInt(q, 26);

    code = code ? code - carry : code;

    n26 = n26.slice(0, -1);

    if (n26.length || code) {
      p = map[code] + p;
    }

    if (!code) {
      carry = 1;
    } else {
      carry = 0;
    }
  }
  return p;
};

// 使用 charCodeAt + String.fromCharCode
// 68ms/37.6MB
var convertToTitle = function (columnNumber) {
  var p = "";
  while (columnNumber) {
    let mod = (columnNumber - 1) % 26;
    p = String.fromCharCode(mod + "A".charCodeAt()) + p;

    columnNumber = (columnNumber - 1 - mod) / 26;
  }

  return p;
};

// 利用 toString(radix) + parseInt(n, radix)
// 使用 charCodeAt + String.fromCharCode
// 72ms/37.4MB
var convertToTitle = function (columnNumber) {
  var p = "";
  var n26 = columnNumber.toString(26);
  var carry = 0;
  while (n26) {
    let q = n26.slice(-1);
    let code = parseInt(q, 26);

    code = code ? code - carry : code;

    n26 = n26.slice(0, -1);

    if (n26.length || code) {
      p = String.fromCharCode((code || 26) - 1 + "A".charCodeAt()) + p;
    }

    if (!code) {
      carry = 1;
    } else {
      carry = 0;
    }
  }
  return p;
};

var cmap = {
  A: 1,
  B: 2,
  C: 3,
  D: 4,
  E: 5,
  F: 6,
  G: 7,
  H: 8,
  I: 9,
  J: 10,
  K: 11,
  L: 12,
  M: 13,
  N: 14,
  O: 15,
  P: 16,
  Q: 17,
  R: 18,
  S: 19,
  T: 20,
  U: 21,
  V: 22,
  W: 23,
  X: 24,
  Y: 25,
  Z: 26,
};
var check = function (columnName) {
  return [...columnName]
    .reverse()
    .reduce((acc, cur, idx) => acc + cmap[cur] * 26 ** idx, 0);
};

// A
var columnNumber = 1;
console.log(convertToTitle(columnNumber));

// AB
var columnNumber = 28;
console.log(convertToTitle(columnNumber));

// ZY
var columnNumber = 701;
console.log(convertToTitle(columnNumber));

// FXSHRXW
var columnNumber = 2147483647;
console.log(convertToTitle(columnNumber));

// AZ
var columnNumber = 52;
console.log(convertToTitle(columnNumber));

// ZZ
var columnNumber = 702;
console.log(convertToTitle(columnNumber));

// ZZZ
var columnNumber = 18278;
console.log(convertToTitle(columnNumber));

// AZAZ
var columnNumber = 35204;
console.log(convertToTitle(columnNumber));

// console.log(
//   [...Array(26)].reduce(
//     (t, c, i) => {
//       t[i + 1] = String.fromCharCode(i + 65)
//       return t
//     },
//     {}
//   )
// );

// console.log(
//   [...Array(26)].reduce((t, c, i) => {
//     t[String.fromCharCode(i + 65)] = i + 1;
//     return t;
//   }, {})
// );

// console.log(check("ZZZ"));
