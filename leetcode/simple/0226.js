// 226. 翻转二叉树
// https://leetcode-cn.com/problems/invert-binary-tree/
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
 * @return {TreeNode}
 */
// 递归
// O(n)/O(logn)
// 64ms/42.2MB
var invertTree = function (root) {
  if (!root) {
    return root;
  }

  let right = invertTree(root.right);
  let left = invertTree(root.left);

  root.left = right;
  root.right = left;

  return root;
};

// 遍历
// O(n)/O(n)
// 44ms(100%)/41.5MB
var invertTree = function (root) {
  if (!root) {
    return root;
  }

  let nodes = [root];

  while (nodes.length) {
    const node = nodes.shift();
    if (node.left || node.right) {
      const temp = node.left;
      node.left = node.right;
      node.right = temp;
      node.left && nodes.push(node.left);
      node.right && nodes.push(node.right);
    }
  }

  return root;
};

// 创建
function creatNode(treeNodes) {
  let root = null;

  function Node(val) {
    this.val = val;
    // this.left = void 0;
    // this.right = void 0;
  }

  function setNode(value) {
    return value === null ? value : new Node(value);
  }

  let node = root;
  let nodes = [];
  while (treeNodes.length) {
    let nodeValue = treeNodes.shift();
    if (root) {
      node = nodes[0];

      while (!node) {
        nodes.shift();
        node = nodes[0];
      }

      if (node.left === undefined) {
        node.left = setNode(nodeValue);
        nodes.push(node.left);
      } else if (node.right === undefined) {
        node.right = setNode(nodeValue);
        nodes.push(node.right);
        nodes.shift();
      }
    } else {
      root = new Node(nodeValue);
      nodes = [root];
    }
  }

  return root;
}

let root = null,
  nodes = null;

root = [4, 2, 7, 1, 3, 6, 9];
nodes = creatNode(root);
console.log(nodes);
console.log(invertTree(nodes));
