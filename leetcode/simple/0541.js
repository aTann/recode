// 541. 反转字符串 II
// https://leetcode-cn.com/problems/reverse-string-ii/
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
// 模拟，指定间隔内数据进行转换
// O(n)/O(n)
// 64ms/44.2MB
var reverseStr = function (s, k) {
  const v = 2 * k;
  const len = s.length / v;
  const arr = [...s];

  const reverse = (list, begin, end) => {
    while (begin < end) {
      [list[end], list[begin]] = [list[begin], list[end]];
      begin += 1;
      end -= 1;
    }
  };

  for (let i = 0; i <= len; i++) {
    let m = i * v,
      n = i * v + k;
    reverse(arr, m, n - 1);
    // arr.splice(m, k, ...arr.slice(m, n).reverse());
  }

  return arr.join("");
};

var s = "abcdefg",
  k = 2; // "bacdfeg"
console.log(reverseStr(s, k));

var s = "abcd",
  k = 2; // "bacd"
console.log(reverseStr(s, k));
