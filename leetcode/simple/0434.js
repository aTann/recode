// 434. 字符串中的单词数
// https://leetcode-cn.com/problems/number-of-segments-in-a-string/
/**
 * @param {string} s
 * @return {number}
 */
// 将空格掐头去尾，切分放入数组进行处理
// O(n)/O(n)
// 52ms/40.8MB
var countSegments = function (s) {
  let w = 0;
  if (!s.trim()) {
    return w;
  }

  let words = s.trim().split(" ");

  while (words.length) {
    w += Number(!!words.pop().length);
  }
  return w;
};

// 原地法
// O(n)/O(1)
// 48ms/41MB
var countSegments = function (s) {
  let segmentCount = 0;

  for (let i = 0; i < s.length; i++) {
    if ((i == 0 || s[i - 1] === " ") && s[i] !== " ") {
      segmentCount += 1;
    }
  }

  return segmentCount;
};

var s = "Of all the gin joints in all the towns in all the world,   ";
console.log(countSegments(s));

var s = "        ";
console.log(countSegments(s));
