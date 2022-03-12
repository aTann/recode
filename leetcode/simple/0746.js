// 746. 使用最小花费爬楼梯
// https://leetcode-cn.com/problems/min-cost-climbing-stairs/
/**
 * @param {number[]} cost
 * @return {number}
 */
// 动态规划
// dp[i] = min(dp[i-1] + cost[i-1], dp[i-2] + cost[i-2])
// O(n)/O(1)
// 52ms/41.7MB
var minCostClimbingStairs = function (cost) {
  let cur = 0;
  let pre = 0;

  for (let i = 2; i <= cost.length; i++) {
    let next = Math.min(cur + cost[i - 1], pre + cost[i - 2]);

    pre = cur;
    cur = next;
  }

  return cur;
};

let cost = [10, 15, 20];
console.log(minCostClimbingStairs(cost));

cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
console.log(minCostClimbingStairs(cost));
