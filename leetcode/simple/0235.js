// 235. 二叉搜索树的最近公共祖先
// https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// 递归，深度遍历
// O(n)/O(height)
// 80ms/51.2MB
var lowestCommonAncestor = function (root, p, q) {
  if (!root) {
    return root;
  }

  if (root.val === p.val || root.val === q.val) {
    return root;
  }

  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);

  if (left && right) {
    return root;
  }

  return left || right;
};

// 迭代
// O(n)/O(n)，控件 4 * n
// 84ms/50.9MB
var lowestCommonAncestor = function (root, p, q) {
  let nodes = [root];
  let po = null;
  let qo = null;
  let walked = [];

  while (nodes.length) {
    root = nodes.pop();
    root.left && nodes.push(root.left);
    root.right && nodes.push(root.right);
    walked.push(root);
    if (!po && root.val === p.val) {
      po = root;
    }
    if (!qo && root.val === q.val) {
      qo = root;
    }
    if (po && qo) {
      break;
    }
  }

  while (walked.length && qo !== po) {
    root = walked.pop();
    if (root.left === po || root.right === po) {
      po = root;
    }
    if (root.left === qo || root.right === qo) {
      qo = root;
    }
  }

  return po;
};

// 二叉搜索树，右节点比左节点值大
// O(n)/O(n)
// 72ms/50.8MB
const getPath = function (root, target) {
  let path = [];
  let node = root;
  while (node && node /*.val*/ !== target /*.val*/) {
    path.push(node);
    if (target.val < node.val) {
      node = node.left;
    } else {
      node = node.right;
    }
  }
  path.push(node);
  return path;
};
var lowestCommonAncestor = function (root, p, q) {
  let pathP = getPath(root, p);
  let pathQ = getPath(root, q);
  let ancestor;

  for (let i = 0; i < pathP.length && i < pathQ.length; i++) {
    if (pathP[i] === pathQ[i]) {
      ancestor = pathP[i];
    } else {
      break;
    }
  }
  return ancestor;
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

let nodes = [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5];
let p = { val: 2 };
let q = { val: 8 };
let root = creatNode(nodes);
console.log(lowestCommonAncestor(root, p, q));

nodes = [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5];
p = { val: 2 };
q = { val: 4 };
root = creatNode(nodes);
console.log(lowestCommonAncestor(root, p, q));
