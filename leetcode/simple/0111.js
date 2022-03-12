// 111. 二叉树的最小深度
// https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/

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

// 深度优先
// O(n)/O(h)
// 216ms / 71.7MB
var minDepth = function (root) {
  if (!root) {
    return 0;
  }

  return (
    (root.left && root.right
      ? Math.min(minDepth(root.left), minDepth(root.right))
      : minDepth(root.left) || minDepth(root.right)) + 1
  );
};

// 广度优先
// O(n)/O(n)
// 220ms/70.9MB
var minDepth = function (root) {
  let p = [];
  let d = 0;

  if (root) {
    p.push(root);
  }

  while (p.length) {
    let q = [];

    d += 1;

    while (p.length) {
      let v = p.shift();
      if (v.left || v.right) {
        v.left && q.push(v.left);
        v.right && q.push(v.right);
      } else {
        // 当不再有子节点后返回即可
        return d;
      }
    }

    p = q;
  }

  return d;
};

var root = null;
console.log(minDepth(root));

root = {
  val: 3,
  left: { val: 9, left: null, right: null },
  right: { val: 20, left: { val: 15 }, right: { val: 7 } },
};
console.log(minDepth(root));

root = {
  val: 2,
  left: null,
  right: {
    val: 3,
    left: null,
    right: {
      val: 4,
      left: null,
      right: { val: 5, left: null, right: { val: 6 } },
    },
  },
};
console.log(minDepth(root));
