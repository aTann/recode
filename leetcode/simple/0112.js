// 112. 路径总和
// https://leetcode-cn.com/problems/path-sum/

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
 * @param {number} targetSum
 * @return {boolean}
 */

// 深度优先
// O(n)/O(height)
// 68ms/41.5MB
var hasPathSum = function (root, targetSum) {
  if (!root) {
    return false;
  }

  return pathSum(root, targetSum, 0);
};

var pathSum = function (root, targetSum, sum) {
  if (!root) {
    return false;
  }

  let { left, right, val } = root;
  let total = sum + val;

  if (left || right) {
    return pathSum(left, targetSum, total) || pathSum(right, targetSum, total);
  }

  return total === targetSum;
};

// 题解
var hasPathSum = function (root, targetSum) {
  if (!root) {
    return false;
  }

  if (root.left || root.right) {
    return (
      // targetSum = targetSum - root.val
      hasPathSum(root.left, targetSum - root.val) ||
      hasPathSum(root.right, targetSum - root.val)
    );
  }

  // 减剩下的
  return root.val === targetSum;
};

// 广度优先
// O(n)/O(n)
// 84ms/42.8MB
var hasPathSum = function (root, targetSum) {
  let nodes = [];

  if (!root) {
    return false;
  }
  root.pre = 0;
  nodes.push(root);

  while (nodes.length) {
    let p = [];

    while (nodes.length) {
      let node = nodes.shift();
      let t = node.val + node.pre;
      if (node.left) {
        node.left.pre = t;
        p.push(node.left);
      }
      if (node.right) {
        node.right.pre = t;
        p.push(node.right);
      }
      if (!node.left && !node.right && t === targetSum) {
        return true;
      }
    }

    nodes = p;
  }

  return false;
};

// 如上
var hasPathSum = function (root, targetSum) {
  let nodes = [];
  let total = [];

  if (!root) {
    return false;
  }

  nodes.push(root);
  total.push(0);

  while (nodes.length) {
    let p = [];
    let q = [];

    while (nodes.length) {
      let n = nodes.shift();
      let t = total.shift();
      let s = t + n.val;

      if (n.left) {
        p.push(n.left);
        q.push(s);
      }
      if (n.right) {
        p.push(n.right);
        q.push(s);
      }
      if (!n.left && !n.right && s === targetSum) {
        return true;
      }
    }

    nodes = p;
    total = q;
  }

  return false;
};

let root = null;
let targetSum = 0;
console.log(hasPathSum(root, targetSum));

root = {
  val: 5,
  left: {
    val: 4,
    left: { val: 11, left: { val: 7 }, right: { val: 2 } },
    right: null,
  },
  right: {
    val: 8,
    left: { val: 13, left: null, right: null },
    right: { val: 4, left: null, right: { val: 1 } },
  },
};
targetSum = 22;
console.log(hasPathSum(root, targetSum));

root = { val: 1, left: { val: 2 }, right: { val: 3 } };
targetSum = 5;
console.log(hasPathSum(root, targetSum));
