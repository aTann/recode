// 492. 构造矩形
// https://leetcode-cn.com/problems/construct-the-rectangle/

/**
作为一位web开发者， 懂得怎样去规划一个页面的尺寸是很重要的。 所以，现给定一个具体的矩形页面面积，你的任务是设计一个长度为 L 和宽度为 W 且满足以下要求的矩形的页面。要求：
1. 你设计的矩形页面必须等于给定的目标面积。
2. 宽度 W 不应大于长度 L ，换言之，要求 L >= W 。
3. 长度 L 和宽度 W 之间的差距应当尽可能小。

返回一个 数组 [L, W]，其中 L 和 W 是你按照顺序设计的网页的长度和宽度。
 */

/**
 * @param {number} area
 * @return {number[]}
 */

// 遍历模拟
// O(n)/O(1)
// 100ms/41MB
var constructRectangle = function (area) {
  let diff = area;
  let ans = Array[2];
  for (let w = 1, l = area; w <= l; w += 1) {
    if (area % w === 0) {
      l = area / w;
      if (Math.abs(l - w) < diff) {
        ans = [l, w];
        diff = Math.abs(l - w);
      }
    }
  }

  return ans;
};

// 1. L * W = area
// 2. L >= W，由 1 知 W*W <= L*W = area, W <= Math.floor(sqrt(area))
// 3. W 应满足 area 可以被 W 整除且 W <= Math.floor(sqrt(area))
// O(logn)/O(1)
// 60ms/40.9MB
var constructRectangle = function (area) {
  let w = Math.floor(Math.sqrt(area));

  while (area % w) {
    w -= 1;
  }

  return [area / w, w];
};

var area = 4;
console.log(constructRectangle(area));

var area = 37;
console.log(constructRectangle(area));

var area = 122122;
console.log(constructRectangle(area));
