// 104. 二叉树的最大深度
// https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/
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

// 递归，深度优先
// O(n)/O(height)
// 76ms/40.6MB
var maxDepth = function (root, depth = 0) {
  if (root) {
    depth = depth + 1;
    return Math.max(maxDepth(root.left, depth), maxDepth(root.right, depth));
  }

  return depth;
};

var maxDepth = function (root) {
  if (!root) {
    return 0;
  }

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

// 迭代，广度优先
// O(n)/O(n)
// 60ms/41.1MB
var maxDepth = function (root) {
  let depth = 0;

  if (!root) {
    return depth;
  }

  let nodes = [];

  nodes.push(root);

  while (nodes.length) {
    // 将本层所有的节点进行遍历，并拿出下一层的数据
    nodes =
      nodes.reduce((children, node) => {
        // 关键点
        if (node) {
          node.left && children.push(node.left);
          node.right && children.push(node.right);
        }

        return children;
      }, []) || [];

    // 层数
    depth += 1;
  }

  return depth;
};

var root = {
  val: 3,
  left: { val: 9, left: null, right: null },
  right: { val: 20, left: { val: 15 }, right: { val: 7 } },
};

console.log(maxDepth(root));

root = null;
console.log(maxDepth(root));

root = {
  val: 0,
};
console.log(maxDepth(root));
