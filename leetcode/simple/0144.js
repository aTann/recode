// 144. 二叉树的前序遍历
// https://leetcode-cn.com/problems/binary-tree-preorder-traversal/
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
// O(n)/O(n + height)
// 76ms/39MB
var preorderTraversal = function (root) {
  let p = [];

  if (!root) {
    return p;
  }

  p.push(root.val);
  p = p.concat(preorderTraversal(root.left));
  p = p.concat(preorderTraversal(root.right));

  return p;
};

// 迭代
// O(n)/O(n)
// 68ms/38MB
var preorderTraversal = function (root) {
  let ans = [];

  if (!root) {
    return ans;
  }

  let nodes = [root];

  while (nodes.length) {
    let p = nodes.shift();

    // 值放入
    ans.push(p.val);

    // 先放 right 再放 left 节点
    p.right && nodes.unshift(p.right);
    p.left && nodes.unshift(p.left);
  }

  return ans;
};

// Morries 遍历
// O(n)/O(1)
// 88ms/38MB
var preorderTraversal = function (root) {
  let ans = [];

  if (!root) {
    return ans;
  }

  // 新建临时节点，令该节点为 root
  let node = root;
  while (node) {
    // 当前节点的左节点不为空，
    if (node.left) {
      let p = node.left;

      // 在当前节点的左子树中找到当前节点在中序遍历的前驱节点
      while (p.right && p.right !== node) {
        p = p.right;
      }

      // 前驱节点的右子节点为当前节点，将右子节点重新设为空。当前节点更新为当前节点的右子节点
      if (p.right === node) {
        p.right = null;
        node = node.right;
      } else {
        // 前驱节点的右子节点为空，将前驱右子节点设置为当前节点
        ans.push(node.val);
        p.right = node;
        node = node.left;
      }
    } else {
      // 如果当前节点的左节点为空，将当前节点加入答案，并遍历当前节点的右节点
      ans.push(node.val);
      node = node.right;
    }
  }

  return ans;
};

let root = null;
console.log(preorderTraversal(root));

root = { val: 1, left: null, right: { val: 2, left: { val: 3 } } };
console.log(preorderTraversal(root));

root = { val: 1 };
console.log(preorderTraversal(root));
