// 145. 二叉树的后序遍历
// https://leetcode-cn.com/problems/binary-tree-postorder-traversal/
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
// O(n)/O(n)
// 72ms/39.2MB
var postorderTraversal = function (root) {
  let ans = [];
  if (!root) {
    return [];
  }
  if (root.left) {
    ans = ans.concat(postorderTraversal(root.left));
  }

  if (root.right) {
    ans = ans.concat(postorderTraversal(root.right));
  }

  ans.push(root.val);

  return ans;
};

// 迭代
// O(n)/O(n) 数组的空间复杂好像是 n
// 71ms/38MB
var postorderTraversal = function (root) {
  let nodes = [];
  let lNodes = [];
  let ans = [];

  while (root || lNodes.length) {
    // 先放入右节点
    while (root) {
      nodes.push(root);
      // 缓存没有处理的左节点
      root.left && lNodes.push(root.left);
      root = root.right;
    }

    // 遍历左节点
    root = lNodes.pop();
  }

  // 将节点遍历取值
  while (nodes.length) {
    ans.push(nodes.pop().val);
  }

  return ans;
};
// 题解
// 80ms/37.9MB
var postorderTraversal = function (root) {
  let ans = [];
  let nodes = [];
  let prev = null;

  while (root || nodes.length) {
    // 左节点放入
    while (root) {
      nodes.push(root);
      root = root.left;
    }

    root = nodes.pop();

    // 如果上一个处理的是右节点，那可以将当前节点放入
    if (!root.right || root.right === prev) {
      ans.push(root.val);
      prev = root;
      root = null;
    } else {
      // 重新放回去，拿出右节点
      nodes.push(root);
      root = root.right;
    }
  }

  return ans;
};

// Morries 遍历
// 利用队列来仿前序
// O(n)/O(1)
// 64ms/37.8MB
var postorderTraversal = function (root) {
  let ans = [];

  while (root) {
    if (root.right) {
      let p = root.right;

      while (p.left && p.left !== root) {
        p = p.left;
      }

      if (p.left) {
        p.left = null;
        root = root.left;
      } else {
        ans.unshift(root.val);
        p.left = root;
        root = root.right;
      }
    } else {
      ans.unshift(root.val);
      root = root.left;
    }
  }

  return ans;
};

// 题解
// O(n)/O(1)
// 64ms/38MB
var postorderTraversal = function (root) {
  let ans = [];
  let rNode = root;
  while (rNode) {
    if (rNode.left) {
      let p = rNode.left;

      while (p.right && p.right !== rNode) {
        p = p.right;
      }

      if (p.right) {
        p.right = null;
        // 取值
        records(ans, rNode.left);
        rNode = rNode.right;
      } else {
        p.right = rNode;
        rNode = rNode.left;
      }
    } else {
      rNode = rNode.right;
    }
  }

  records(ans, root)

  return ans;
};

var records = function (ans, node) {
  let lst = [];
  while (node) {
    lst.push(node.val);
    node = node.right;
  }

  // 倒转获取
  while (lst.length) {
    ans.push(lst.pop());
  }
};

let root = null;
console.log(postorderTraversal(root));

root = { val: 1, left: null, right: { val: 2, left: { val: 3 } } };
console.log(postorderTraversal(root));

root = { val: 1 };
console.log(postorderTraversal(root));

root = {
  val: 1,
  left: {
    val: 2,
    left: { val: 4, left: { val: 8 }, right: { val: 9 } },
    right: { val: 5, left: { val: 10 }, right: { val: 11 } },
  },
  right: { val: 3, left: { val: 6 }, right: { val: 7 } },
};
console.log(postorderTraversal(root));
