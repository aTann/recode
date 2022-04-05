// 563. 二叉树的坡度
// https://leetcode-cn.com/problems/binary-tree-tilt/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// 深度优先搜索
// 将计算好的梯度放到一个数组里
// O(n)/O(n)
// 68ms/46MB
var findTilt = function (root) {
  let ans = 0;
  const dfs = (node) => {
    if (!node) {
      return 0;
    }

    const l = dfs(node.left);
    const r = dfs(node.right);

    ans += Math.abs(l - r);

    return l + r + node.val;
  };

  dfs(root);

  return ans;
};
