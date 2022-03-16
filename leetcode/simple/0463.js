// 463. 岛屿的周长
// https://leetcode-cn.com/problems/island-perimeter/
/*
给定一个 `row x col` 的二维网格地图 `grid` ，其中：`grid[i][j] = 1` 表示陆地， `grid[i][j] = 0` 表示水域。

网格中的格子 水平和垂直 方向相连（对角线方向不相连）。整个网格被水完全包围，但其中恰好有一个岛屿（或者说，一个或多个表示陆地的格子相连组成的岛屿）。

岛屿中没有“湖”（“湖” 指水域在岛屿内部且不和岛屿周围的水相连）。格子是边长为 1 的正方形。网格为长方形，且宽度和高度均不超过 100 。计算这个岛屿的周长。

示例 1：
[!示例1图](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/10/12/island.png)
输入：grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
输出：16
解释：它的周长是上面图片中的 16 个黄色的边

示例 2：
输入：grid = [[1]]
输出：4

示例 3：
输入：grid = [[1,0]]
输出：4
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
// 暴力模拟
// O(m*n)/O(1)
// 116ms/48.7MB
var islandPerimeter = function (grid) {
  let row = grid.length;
  let perimeter = 0;
  for (let r = 0; r < row; r += 1) {
    const col = grid[r].length;
    for (let c = 0; c < col; c += 1) {
      const cell = grid[r][c];
      if (cell) {
        perimeter +=
          4 -
          ((r > 0 && grid[r - 1][c]) +
            (c + 1 < col && grid[r][c + 1]) +
            (r + 1 < row && grid[r + 1][c]) +
            (c > 0 && grid[r][c - 1]));
      }
    }
  }

  return perimeter;
};

var grid = [
  [0, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 0, 0],
  [1, 1, 0, 0],
];
console.log(islandPerimeter(grid));

var grid = [[1]];
console.log(islandPerimeter(grid));

var grid = [[1, 0]];
console.log(islandPerimeter(grid));
