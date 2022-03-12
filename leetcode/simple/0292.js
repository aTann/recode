// 292. Nim 游戏
// https://leetcode-cn.com/problems/nim-game/
// 博弈论要么是特定情况下先手必赢，要么是分先手,后手进行状态转移。

/**
 * @param {number} n
 * @return {boolean}
 */
// 动态规划
// O(n)/O(1)
// 超出时间限制
var canWinNim = function (n, count = 1) {
  let w1 = true,
    w2 = true,
    w3 = true;

  for (let i = 4; i <= n; i++) {
    let res = true;
    if (w1 && w2 && w3) {
      res = false;
    }
    w1 = w2;
    w2 = w3;
    w3 = res;
  }
  return w3;
};

for (let i = 1; i < 1000; i++) {
  console.log(i, canWinNim(i));
}

// 数学方式，由上面的式子归纳得到，只要前面 3 次都可以获胜，那么下一次一定会输
// O(1)/O(1)
// 60ms/40.5MB
var canWinNim = function (n) {
  return n % 4;
};

// 1 => 1
// 2 => 2
// 3 => 3
// 4 => 1,3 2,2 3,1
// 5 => 1,(4) 2,(3) 3,(2)
// 6 => 1,(5) 2,(4) 3,(3)
// 7 => 3,(4)
// 8 => 1,3,(4) 3,1,(4)
// 9 => 2,



// let n = 4;
// console.log(n, canWinNim(n));

// // n = 1;
// // console.log(canWinNim(n));

// // n = 2;
// // console.log(canWinNim(n));

// n = 5;
// console.log(n, canWinNim(n));

// n = 6;
// console.log(n, canWinNim(n));

// n = 7;
// console.log(n, canWinNim(n));

// n = 8;
// console.log(n, canWinNim(n));

// n = 1348820612;
// console.log(n, canWinNim(n));
