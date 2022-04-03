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
  let depth = 1;

  if (children.length) {
    let childrenDepths = Array(children.length);
    children.forEach((child, idx) => {
      childrenDepths[idx] = maxDepth(child);
    });
    depth += Math.max(...childrenDepths);
  }

  return depth;
};

// 题解
// 84ms/43.6MB
var maxDepth = function (root) {
  if (!root) {
    return 0;
  }

  const { children } = root;
  let maxChildDepth = 0;

  if (children.length) {
    children.forEach((child) => {
      maxChildDepth = Math.max(maxDepth(child), maxChildDepth);
    });
  }

  return maxChildDepth + 1;
};

// 广度优先
// O(n)/O(max(layers))
// 68ms/43.4MB
var maxDepth = function (root) {
  let count = 0;
  if (root) {
    let nodes = [root];

    while (nodes.length) {
      const childList = [];
      nodes.forEach((node) => {
        if (node) {
          const { children } = node;
          childList.push(...children);
        }
      });
      count += 1;
      nodes = childList;
    }
  }

  return count;
};
