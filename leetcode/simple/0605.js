// 605. 种花问题
// https://leetcode-cn.com/problems/can-place-flowers/
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
// 模拟
// O(n)/O(1)
// 64ms/43.3MB
// 在不打破种植规则的情况下，即不能插入值
var canPlaceFlowers = function (flowerbed, n) {
  const count = (flowerbed.length + 1) >> 1;
  const placed = flowerbed.filter((i) => i).length;

  if (count < placed + n) {
    return false;
  }

  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i]) {
      continue;
    }

    const pre = flowerbed[i - 1];
    const next = flowerbed[i + 1];
    if (!next && !pre) {
      n -= 1;
      flowerbed[i] = 1;
    }
    if (n <= 0) {
      return true;
    }
  }

  return !n;
};

// 贪心
// O(n)/O(1)
// 56ms/43MB
var canPlaceFlowers = function (flowerbed, n) {
  let i = 0;
  const len = flowerbed.length;
  let pre = -1;

  while (i < len) {
    while (flowerbed[i] === 0) {
      i += 1;
    }

    let m = i - pre - 1;
    if (pre === -1 && i === len) {
      n -= (m + 1) >> 1;
    } else if (pre === -1 || i === len) {
      n -= m >> 1;
    } else {
      n -= (m - 1) >> 1;
    }

    // 提前中断
    if (n <= 0) {
      return true;
    }

    pre = i;

    i += 1;
  }

  return n <= 0;
};

var flowerbed = [1, 0, 0, 0, 1],
  n = 1;
console.log(canPlaceFlowers(flowerbed, n));

var flowerbed = [1, 0, 0, 0, 1],
  n = 2;
console.log(canPlaceFlowers(flowerbed, n));

var flowerbed = [1, 0, 1, 0, 1, 0, 1],
  n = 0;
console.log(canPlaceFlowers(flowerbed, n));

var flowerbed = [0, 1, 0],
  n = 1;
console.log(canPlaceFlowers(flowerbed, n));

var flowerbed = [0, 0],
  n = 1;
console.log(canPlaceFlowers(flowerbed, n));

var flowerbed = [0, 0, 0],
  n = 2;
console.log(canPlaceFlowers(flowerbed, n));
