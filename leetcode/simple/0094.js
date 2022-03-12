// 94.二叉树的中序遍历
// https://leetcode-cn.com/problems/binary-tree-inorder-traversal/

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
 * @return {number[]}
 */
// 递归
// O(n)/O(n)，n 是层数
// 68ms/38.9MB
var inorderTraversal = function (root) {
  let output = [];

  if (!root) {
    return output;
  }

  if (root.left) {
    output.push(...inorderTraversal(root.left));
  }

  output.push(root.val);

  if (root.right) {
    output.push(...inorderTraversal(root.right));
  }

  return output;
};

// 迭代
// O(n)/O(n)
// 72ms / 37.8MB
var inorderTraversal = function (root) {
  let nodes = [];
  let list = [];

  while (root || nodes.length) {
    while (root) {
      nodes.push(root);
      root = root.left;
    }

    root = nodes.pop();

    list.push(root.val);
    root = root.right;
  }
  return list;
};

// Morris 中序遍历
var inorderTraversal = function (root) {
  let x = root;
  let list = [];
  let predecessor = null;
  while (x != null) {
    if (x.left != null) {
      predecessor = x.left;
      while (predecessor.right != null && predecessor.right !== x) {
        predecessor = predecessor.right;
      }

      if (predecessor.right == null) {
        predecessor.right = x;
        x = x.left;
      } else {
        list.push(x.val);
        predecessor.right = null;
        x = x.right;
      }
    } else {
      list.push(x.val);
      x = x.right;
    }
  }
  return list;
};

let root = null;

root = {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: {
      val: 3,
    },
  },
};
console.log(inorderTraversal(root));

root = null;
console.log(inorderTraversal(root));

root = { val: 1 };
console.log(inorderTraversal(root));

root = {
  val: 1,
  left: {
    val: 2,
  },
};
console.log(inorderTraversal(root));

root = {
  val: 1,
  left: null,
  right: {
    val: 2,
  },
};
console.log(inorderTraversal(root));
