// 121. 买卖股票的最佳时机
// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/
/**
 * @param {number[]} prices
 * @return {number}
 */
// 动态规划
// 动态方程：max(dp[i] - min(min, dp[i]), profit)
// O(n)/O(1)
// 96ms/47.7MB
var maxProfit = function (prices) {
  let min = Number.MAX_SAFE_INTEGER;
  let profit = 0;

  prices.forEach((price) => {
    if (min > price) {
      min = price;
    }

    if (profit < price - min) {
      profit = price - min;
    }
  });

  return profit;
};

// 108ms/46.9MB
var maxProfit = function (prices) {
  let min = Number.MAX_SAFE_INTEGER;
  let profit = 0;

  prices.forEach((price) => {
    if (min > price) {
      min = price;
    }

    profit = Math.max(profit, price - min);
  });

  return profit;
};

// 108ms/47.6MB
var maxProfit = function (prices) {
  let min = Number.MAX_SAFE_INTEGER;
  let profit = 0;

  prices.forEach((price) => {
    min = Math.min(price, min);
    profit = Math.max(profit, price - min);
  });

  return profit;
};

let prices = [];

prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));

prices = [7, 6, 4, 3, 1];
console.log(maxProfit(prices));

prices = [2, 4, 1];
console.log(maxProfit(prices));

prices = [3, 2, 6, 5, 0, 3];
console.log(maxProfit(prices));

/**
 * 动态规划 4 个步骤：
 * 1. 刻画一个最优解的结构特征
 * 2. 递归地定义最优解的值
 * 3. 计算最优解的值，通常采用自底向上的方法
 * 4. 利用计算出的信息构造一个最优解
 */
