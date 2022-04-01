// 543. 二叉树的直径
// https://leetcode-cn.com/problems/diameter-of-binary-tree/
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
// 后序遍历，收集当前节点的直径，返回当前节点最长半径
// O(n)/O(Height)
// 60ms/44.7MB
var diameterOfBinaryTree = function (root) {
  let max = Number.MIN_SAFE_INTEGER;

  const dfs = (root) => {
    if (!root) {
      return 0;
    }

    let l = dfs(root.left);
    let r = dfs(root.right);
    let c = 1 + Math.max(l, r);
    max = Math.max(max, l + r + 1);
    return c;
  };

  max = Math.max(dfs(root), max);

  return max - 1;
};

// 遍历
// morries
