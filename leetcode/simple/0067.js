// 67. 二进制求和
// https://leetcode-cn.com/problems/add-binary/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

// 模拟 逢二进一
// O(n)/O(1)
// 72ms/40.7MB
var addBinary = function (a, b) {
  let m = a.length - 1,
    n = b.length - 1;
  let r = "";
  let carry = 0;

  while (!(m < 0 && n < 0)) {
    let mi = m >= 0 ? parseInt(a[m], 10) : 0;
    let ni = n >= 0 ? parseInt(b[n], 10) : 0;
    let t = mi + ni + carry;

    // 2 的余数
    r = (t % 2) + r;
    // 除以 2 得到的值，需要进位
    carry = t >> 1;

    m -= 1;
    n -= 1;
  }

  if (carry) {
    r = "1" + r;
  }

  return r;
};

// 位计算
// 对大数据无法通过
var addBinary = function (a, b) {
  let x = BigInt(parseInt(a, 2)),
    y = BigInt(parseInt(b, 2));

  console.log(x, y);

  while (y) {
    let ans = x ^ y;
    let carry = (x & y) << 1n;

    [x, y] = [ans, carry];
  }

  return x.toString(2);
};

let a, b;

// a = "11";
// b = "1";
// console.log(addBinary(a, b));

// a = "1010";
// b = "1011";
// console.log(addBinary(a, b));

// a = "1010";
// b = "101";
// console.log(addBinary(a, b));

a =
  "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101";
b =
  "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011";
console.log(addBinary(a, b));
