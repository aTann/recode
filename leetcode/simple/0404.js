// 404. 左叶子之和
// https://leetcode-cn.com/problems/sum-of-left-leaves/
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
// 中序，监测是否是叶子
// O(n)/O(n)
// 72ms/42.7MB
// 广度优先
var sumOfLeftLeaves = function (root) {
  let nodes = [root];
  let leftSum = 0;
  while (nodes.length) {
    let node = nodes.shift();
    if (node.left) {
      if (!node.left.left && !node.left.right) {
        leftSum += node.left.val;
      }
      nodes.push(node.left);
    }
    node.right && nodes.push(node.right);
  }

  return leftSum;
};

// 深度
var sumOfLeftLeaves = function (root) {
  let nodes = [root];
  let leftSum = 0;
  while (nodes.length) {
    let node = nodes.shift();
    
    node.right && nodes.unshift(node.right);

    if (node.left) {
      if (!node.left.left && !node.left.right) {
        leftSum += node.left.val;
      }
      nodes.unshift(node.left);
    }
    
  }

  return leftSum;
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

let root = creatNode([3, 9, 20, null, null, 15, 7]);
console.log(sumOfLeftLeaves(root));

root = creatNode([1]);
console.log(sumOfLeftLeaves(root));

root = creatNode([1,2,3,4,5]);
console.log(sumOfLeftLeaves(root));
