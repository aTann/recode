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

const create = (list) => {
  const tree = { root: new Node(null, []) };
  let root = tree.root;
  let children = [root];

  list.forEach((item) => {
    if (item != null) {
      if (root.val == null) {
        root.val = item;
      } else {
        const temp = new Node(item, []);
        root.children.push(temp);
        children.push(temp);
      }
    } else {
      root = children.shift();
    }
  });

  function Node(val, children) {
    this.val = val;
    this.children = children;
  }
  return tree.root;
};

var nodes = [1, null, 3, 2, 4, null, 5, 6];
var root = create(nodes);
// console.log(JSON.stringify(create(nodes)));
console.log(maxDepth(root));

var nodes = [
  1,
  null,
  2,
  3,
  4,
  5,
  null,
  null,
  6,
  7,
  null,
  8,
  null,
  9,
  10,
  null,
  null,
  11,
  null,
  12,
  null,
  13,
  null,
  null,
  14,
];
var root = create(nodes);
// console.log(JSON.stringify(create(root)));
console.log(maxDepth(root));
