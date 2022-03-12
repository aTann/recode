// 257. 二叉树的所有路径
// https://leetcode-cn.com/problems/binary-tree-path/

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
 * @return {string[]}
 */

// 深度遍历
// O(n^2)/O(n^2)
// 56ms/42.8MB

var binaryTreePaths = function (node, path = "", paths = []) {
  let left = null;
  let right = null;
  let ret = [];

  path += node.val;

  if (node.left || node.right) {
    path += "->";
    if (node.left) {
      left = binaryTreePaths(node.left, path, paths);
      ret.push(left);
    }

    if (node.right) {
      right = binaryTreePaths(node.right, path, paths);
      ret.push(right);
    }
  } else {
    paths.push(path);
  }

  return paths;
};

// 广度遍历
// O(n^2)/O(n^2)
// 76ms/42.4MB
var binaryTreePaths = function (root) {
  let nodeQueue = [root];
  let pathQueue = ["" + root.val];
  let paths = [];

  while (nodeQueue.length) {
    root = nodeQueue.shift();

    if (root.left || root.right) {
      let path = pathQueue.shift();
      if (root.left) {
        nodeQueue.push(root.left);
        pathQueue.push(path + "->" + root.left.val);
      }

      if (root.right) {
        nodeQueue.push(root.right);
        pathQueue.push(path + "->" + root.right.val);
      }
    } else {
      paths.push(pathQueue.shift());
    }
  }

  return paths;
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

let nodes = null;
let root = null;

nodes = [1, 2, 3, null, 5];
root = creatNode(nodes);
console.log(binaryTreePaths(root));

nodes = [1, 2, 3, 4, 5, 6, 7];
root = creatNode(nodes);
console.log(binaryTreePaths(root));

/*
复杂度分析

时间复杂度：O(N^2)，其中 N 表示节点数目。在深度优先搜索中每个节点会被访问一次且只会被访问一次，每一次会对 path 变量进行拷贝构造，时间代价为 O(N)，故时间复杂度为 O(N^2)。

空间复杂度：O(N^2)，其中 N 表示节点数目。除答案数组外我们需要考虑递归调用的栈空间。在最坏情况下，当二叉树中每个节点只有一个孩子节点时，即整棵二叉树呈一个链状，此时递归的层数为 N，此时每一层的 path 变量的空间代价的总和为 O(sum(i = [1,N])) = O(N^2) 空间复杂度为 O(N^2)。最好情况下，当二叉树为平衡二叉树时，它的高度为 logN，此时空间复杂度为 O(logN)
*/
