// 405. 数字转换为十六进制数
// https://leetcode-cn.com/problems/convert-a-number-to-hexadecimal/
/**
 * @param {number} num
 * @return {string}
 */
// 右移 4 位进行转换
// O(k)/O(1), k = 32/4 = 8
// 56ms/41MB
const x = Array(10)
  .fill(0)
  .map((_, i) => i.toString());

x.push("a", "b", "c", "d", "e", "f");

var toHex = function (num) {
  let n = "";

  const hex = (u) => {
    let v = "";

    while (u && v.length < 8) {
      let t = u & 0xf;
      v = x[t] + v;
      u >>= 4;
    }

    return v;
  };

  if (num === 0) {
    n = "0";
  } else {
    n = hex(num);
  }

  return n;
};

let num = 0;
console.log(toHex(num));

// num = 14;
// console.log(toHex(num));

// num = 26;
// console.log(toHex(num));

// num = -1;
// console.log(toHex(num));

num = 100000;
console.log(toHex(num));

// "fffe7960"
num = -100000;
console.log(toHex(num, -15));
