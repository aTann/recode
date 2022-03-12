// 101. 对称二叉树
// https://leetcode-cn.com/problems/symmetric-tree/
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
// 迭代
// O(n)/O(n)
//  84ms/39.3MB
var isSymmetric = function (root) {
  let { left: l, right: r } = root;
  let p = [l];
  let q = [r];

  while (p.length || q.length) {
    l = p.shift();
    r = q.shift();

    if (!!l ^ !!r) {
      return false;
    }

    // 同时 null 或者 undefined
    if (!l && !r) {
      continue;
    }

    if (l.val !== r.val) {
      return false;
    } else {
      p.push(l.left);
      p.push(l.right);
      // 压栈顺序不一样
      q.push(r.right);
      q.push(r.left);
    }
  }

  return true;
};

// 递归
// O(n)/O(n)
// 104ms/40MB
var isSymmetric = function (root) {
  return check(root.left, root.right);
};

var check = function (p, q) {
  if (!p ^ !q) {
    return false;
  }

  if (!p && !q) {
    return true;
  }

  return p.val == q.val && check(p.left, q.right) && check(p.right, q.left);
};

let root = null;

root = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3,
    },
    right: {
      val: 4,
    },
  },
  right: {
    val: 2,
    left: {
      val: 4,
    },
    right: {
      val: 3,
    },
  },
};

console.log(isSymmetric(root));

root = {
  val: 1,
  left: { val: 2, right: { val: 3 } },
  right: { val: 2, right: { val: 3 } },
};

console.log(isSymmetric(root));
