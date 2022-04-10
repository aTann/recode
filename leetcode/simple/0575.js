// 575. 分糖果
// https://leetcode-cn.com/problems/distribute-candies/
/**
 * @param {number[]} candyType
 * @return {number}
 */

// 贪心
// 比较糖果的品种数与该吃的糖果数量，小的输出
// O(n)/O(1)
// 96ms/55MB
var distributeCandies = function (candyType) {
  const typeCount = new Set(candyType).size;
  const half = candyType.length >> 1;
  return Math.min(half, typeCount);
};

// hash
// 108ms/55.5MB
var distributeCandies = function (candyType) {
  const len = candyType.length;
  const map = new Map();

  for (let i = 0; i < len; i++) {
    if (!map.has(candyType[i])) {
      map.set(candyType[i], 1);
      // 提早结束
      // 92ms/53.7MB
      if (map.size >= len >> 1) {
        return len >> 1;
      }
    }
  }

  return Math.min(len >> 1, map.size);
};

var candyType = [1, 1, 2, 2, 3, 3];
console.log(distributeCandies(candyType));

var candyType = [1, 1, 2, 3];
console.log(distributeCandies(candyType));

var candyType = [6, 6, 6, 6];
console.log(distributeCandies(candyType));
