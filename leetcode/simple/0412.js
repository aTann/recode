// 412. Fizz Buzz
// https://leetcode-cn.com/problems/fizz-buzz/
/**
 * @param {number} n
 * @return {string[]}
 */
// 模拟 + 字符串拼接
// O(n)/O(1)，返回值不计入空间复杂度
// 60ms/43.1MB
var fizzBuzz = function (n) {
  let ans = Array(n);
  for (let i = 1; i <= n; i++) {
    let t = "";

    if (i % 3 === 0) {
      t += "Fizz";
    }

    if (i % 5 === 0) {
      t += "Buzz";
    }

    ans[i] = t || ('' + i);
  }

  return ans.slice(1);
};

// 逐次 +3 和 +5 尝试
// O(n/3 + n/5 = 8n/15)/O(n), 实际上 O(n + 8n/15)/O(n)
// O(60ms)/43.4MB
var fizzBuzz = function (n) {
  let ans = Array(n)
    .fill(1)
    .map((_, i) => "" + (i + 1));

  let i = 2;
  while (ans[i]) {
    ans[i] = "Fizz";
    i += 3;
  }

  i = 4;
  while (ans[i]) {
    ans[i] = isNaN(ans[i]) ? "FizzBuzz" : "Buzz";
    i += 5;
  }

  return ans;
};

var n = 3;
console.log(fizzBuzz(n));

var n = 5;
console.log(fizzBuzz(n));

var n = 15;
console.log(fizzBuzz(n));
