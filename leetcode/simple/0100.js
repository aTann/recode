// 100. 相同的树
// https://leetcode-cn.com/problems/same-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// 深度优先
// O(n)/O(n)
// 84ms/38.8MB
var isSameTree = function (p, q) {
  if (p == q) {
    return true;
  }

  if ((p || {}).val === (q || {}).val) {
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  } else {
    return false;
  }
};

// 广度优先
// O(n)/O(1)
// 68ms/38.9MB
var isSameTree = function (p, q) {
  let ps = [p],
    qs = [q];

  while (ps.length && qs.length) {
    p = ps.shift();
    q = qs.shift();

    if (!!p ^ !!q) {
      return false;
    }

    if (p == q) {
      continue;
    }

    if (p.val === q.val) {
      if (p.left ^ q.left) {
        return false;
      }

      if (p.right ^ q.right) {
        return false;
      }

      ps.push(p.left, p.right);
      qs.push(q.left, q.right);
    } else {
      return false;
    }
  }

  return true;
};

// O(1)/O(1)
// 76ms/38.9MB
var isSameTree = function (p, q) {
  return JSON.stringify(p) === JSON.stringify(q);
};

var p = null,
  q = null;

console.log(isSameTree(p, q));

p = {
  val: 1,
  left: {
    val: 2,
  },
  right: {
    val: 3,
  },
};

q = {
  val: 1,
  left: {
    val: 2,
  },
  right: {
    val: 3,
  },
};

console.log(isSameTree(p, q));

p = {
  val: 1,
  left: {
    val: 2,
  },
};

q = {
  val: 1,

  right: {
    val: 2,
  },
};
console.log(isSameTree(p, q));

// p = [1, null, 2, 3];
// q = [1, null, 2, null, 3];
p = {
  val: 1,
  right: {
    val: 2,
    left: {
      val: 3,
    },
  },
};

q = {
  val: 1,
  right: {
    val: 2,
    right: {
      val: 3,
    },
  },
};
console.log(isSameTree(p, q));
