// 559. N 叉树的最大深度
// https://leetcode-cn.com/problems/maximum-depth-of-n-ary-tree/
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
// 迭代，深度优先
// O(n)/O(Height)
// 72ms/43.6MB
var maxDepth = function (root) {
  if (!root) {
    return 0;
  }

  const { children } = root;
  let layer = 1;

  if (children.length) {
    let layers = Array(children.length);
    children.forEach((child, idx) => {
      layers[idx] = maxDepth(child);
    });
    layer += Math.max(...layers);
  }

  return 1 + Math.max(...layers);
};

// 广度优先
var maxDepth = function (root) {
  const count = 0;
  let nodes = [root];

  while (nodes.length) {
    
  }
};
