// 401. 二进制手表
// https://leetcode-cn.com/problems/binary-watch/
/**
 * @param {number} turnedOn
 * @return {string[]}
 */
// var hammingWeight = function (n) {
//   const M1 = 0x55555555; // 01010101010101010101010101010101
//   const M2 = 0x33333333; // 00110011001100110011001100110011
//   const M4 = 0x0f0f0f0f; // 00001111000011110000111100001111
//   const M8 = 0x00ff00ff; // 00000000111111110000000011111111
//   const M16 = 0x0000ffff; // 00000000000000001111111111111111

//   n = (n & M1) + ((n >>> 1) & M1);
//   n = (n & M2) + ((n >>> 2) & M2);
//   n = (n & M4) + ((n >>> 4) & M4);
//   n = (n & M8) + ((n >>> 8) & M8);
//   n = (n & M16) + ((n >>> 16) & M16);

//   return n >>> 0;
// };

var hammingWeight = function (n) {
  const M1 = 0b0101010101010101;
  const M2 = 0b0011001100110011;
  const M4 = 0b0000111100001111;
  const M8 = 0b0000000011111111;

  n = (n & M1) + ((n >>> 1) & M1);
  n = (n & M2) + ((n >>> 2) & M2);
  n = (n & M4) + ((n >>> 4) & M4);
  n = (n & M8) + ((n >>> 8) & M8);

  return n >>> 0;
};

// 12 * 60 分钟逐个遍历
// O(1)/O(1)
// 52ms/43.4MB
var readBinaryWatch = function (turnedOn) {
  const len = 12 * 60;
  let ans = [];
  for (let i = 0; i < len; i += 1) {
    let h = parseInt(i / 60, 10);
    let m = i % 60;

    let t = "0b" + h.toString(2) + ("000000" + m.toString(2)).slice(-6);

    if (hammingWeight(Number(t)) === turnedOn) {
      ans.push(`${h}:${("0" + m).slice(-2)}`);
    }
  }

  return ans;
};

// 二进制枚举
// O(1)/O(1)
// 64ms/43.2MB
var readBinaryWatch = function (turnedOn) {
  let len = 2 ** 10;
  let ans = [];
  for (let i = 0; i < len; i++) {
    let h = i >> 6;
    let m = i & 0b111111;
    // 计算 1 的数量
    let bN = (n) => n.toString(2).split(0).join("").length;
    if (h < 12 && m < 60 && bN(i) === turnedOn) {
      ans.push(`${h}:${("0" + m).slice(-2)}`);
    }
  }

  return ans
};

// 1 => 10
// 2 =>

// 0b0000000000
// C(10,2)
let turnedOn = 1;
console.log(readBinaryWatch(turnedOn));

turnedOn = 9;
console.log(readBinaryWatch(turnedOn));

turnedOn = 2;
console.log(readBinaryWatch(turnedOn));
