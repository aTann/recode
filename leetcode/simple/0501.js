// 501. 二叉搜索树中的众数
// https://leetcode-cn.com/problems/find-mode-in-binary-search-tree/
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
// 广度优先，HashMap
// O(n)/O(n)
// 84ms/49.6MB
var findMode = function (root) {
  const map = new Map();
  const nodes = [root];

  let ans = [];
  let max = Number.MIN_SAFE_INTEGER;

  while (nodes.length) {
    const { val, left, right } = nodes.shift();

    map.set(val, (map.get(val) || 0) + 1);

    left && nodes.push(left);
    right && nodes.push(right);
  }

  for (const [key, val] of map) {
    if (val > max) {
      max = val;
      ans = [key];
    } else if (val === max) {
      ans.push(key);
    }
  }

  return ans;
};

var root = creatNode([1, null, 2, 2]);
console.log(findMode(root));

var root = creatNode([0]);
console.log(findMode(root));

function creatNode(treeNodes) {
  let root = null;

  function Node(val) {
    this.val = val;
    this.left = void 0;
    this.right = void 0;
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
