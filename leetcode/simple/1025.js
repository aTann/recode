// 1025. 除数博弈
// https://leetcode-cn.com/problems/divisor-game/
// 数学，偶数开局必胜
// 如果N是奇数，因为奇数的所有因数都是奇数，因此 N 进行一次 N-x 的操作结果一定是偶数，所以如果 a 拿到了一个奇数，那么轮到 b 的时候，b 拿到的肯定是偶数，这个时候 b 只要进行 -1， 还给 a 一个奇数，那么这样子 b 就会一直拿到偶数，到最后 b 一定会拿到最小偶数 2，a 就输了。
// O(1)/O(1)
// 52ms/40.6MB
var divisorGame = function (n) {
  return !(n & 1);
};

// 动态规划
// O(n^2)/O(n)
// 52ms/41.3MB
var divisorGame = function (n) {
  var f = [, false, true];
  for (let i = 3; i <= n; i += 1) {
    for (let k = 1; k < i; k += 1) {
      if (i % k === 0 && !f[i - k]) {
        f[i] = true;
        break;
      }
    }
  }

  return !!f[n];
};

let n = 2;
console.log(divisorGame(n));

n = 5;
console.log(divisorGame(n));

n = 10;
console.log(divisorGame(n));

n = 8;
console.log(divisorGame(n));
