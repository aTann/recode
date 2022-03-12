// 110. 平衡二叉树
// https://leetcode-cn.com/problems/balanced-binary-tree/
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
 * @return {boolean}
 */
// 自顶而下
// O(n^2)/O(n)
// 84ms/42.1MB
var isBalanced = function (root) {
  if (!root) {
    return true;
  }

  // 上层进行比较
  let p = Math.abs(depth(root.left) - depth(root.right)) <= 1;

  if (p) {
    // 逐层进行比较
    return isBalanced(root.left) && isBalanced(root.right);
  }

  return p;
};

// 题解
var isBalanced = function (root) {
  if (!root) {
    return true;
  }

  return (
    Math.abs(depth(root.left) - depth(root.right)) <= 1 &&
    isBalanced(root.left) &&
    isBalanced(root.right)
  );
};

// O(n)/O(logn)
var depth = function (node) {
  if (!node) {
    return 0;
  }

  return Math.max(depth(node.left), depth(node.right)) + 1;
};

// 自底而上
// O(n)/O(n)
// 68ms/41.6MB
var isBalanced = function (root) {
  return depth(root) >= 0;
};

var depth = function (node) {
  if (!node) {
    return 0;
  }

  // 下层先进行比较
  let lDepth = depth(node.left);
  let rDepth = depth(node.right);

  if (lDepth === -1 || rDepth === -1 || Math.abs(lDepth - rDepth) > 1) {
    return -1;
  }

  return Math.max(lDepth, rDepth) + 1;
};

var root;

root = {
  val: 3,
  left: { val: 9, left: null, right: null },
  right: { val: 20, left: { val: 15 }, right: { val: 7 } },
};
console.log(isBalanced(root));

root = {
  val: 1,
  left: {
    val: 2,
    left: { val: 3, left: { val: 4 }, right: { val: 4 } },
    right: { val: 3 },
  },
  right: { val: 2, left: null, right: null },
};
console.log(isBalanced(root));

root = null;
console.log(isBalanced(root));

root = { val: 1, left: null, right: { val: 2, left: { val: 3 } } };
console.log(isBalanced(root));

root = {
  val: 1,
  left: {
    val: 2,
    left: { val: 3, left: { val: 4 }, right: null },
    right: null,
  },
  right: {
    val: 2,
    left: null,
    right: { val: 3, left: null, right: { val: 4 } },
  },
};
console.log(isBalanced(root));
