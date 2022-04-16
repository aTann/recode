// 606. 根据二叉树创建字符串
// https://leetcode-cn.com/problems/construct-string-from-binary-tree/
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
 * @return {string}
 */
// 前序遍历，递归
// O(n)/O(Height)
// 60ms/45.7MB
var tree2str = function (root) {
  if (!root) {
    return "";
  }

  const { left, right, val } = root;
  let str = "" + val;

  if (left || right) {
    str += "(" + tree2str(left) + ")";
  }

  if (right) {
    str += "(" + tree2str(right) + ")";
  }

  return str;
};

// morries
// TODO:未成功
var tree2str = function (root) {
  const ans = [];
  let pre = null;

  while (root) {
    if (root.left) {
      let p = root.left;

      while (p.right && p.right !== root) {
        p = p.right;
      }

      if (p.right === null) {
        ans.push("(");
        ans.push(root.val);
        p.right = root;
        root = root.left;
      } else {
        ans.push(")");
        p.right = null;
        pre = root;
        root = root.right;
      }
    } else {
      pre = root;
      ans.push("(");
      ans.push(root.val);
      root = root.right;
      if (!root) {
        ans.push(")");
      } else {
        ans.push("()");
      }
    }
  }

  return ans.join("");
};

var tree2str = function (root) {
  let nodes = [root];
  let ans = [];
  const map = new Map();

  while (nodes.length) {
    const node = nodes.pop();
    if (node) {
      // 完成一个包裹
      if (map.has(node)) {
        ans.push(")" + node.val);
        continue;
      }

      // 包裹自身
      ans.push("(" + node.val);
      ans.push(node.val);
      if (node.right || node.left) {
        // 缓存，记录当前的节点已经遍历过
        nodes.push(node);
        map.set(node, 1);

        // 不存 right=null
        node.right && nodes.push(node.right);
        nodes.push(node.left);
      } else {
        ans.push(")" + node.val);
      }
    } else {
      // 空的 left 才会存进来
      ans.push("()");
    }
  }

  return ans;
};

// 迭代
var tree2str = function (root) {
  let nodes = [root];
  let ans = "";
  const map = new Map();

  while (nodes.length) {
    const node = nodes.pop();
    if (node) {
      // 完成一个包裹
      if (map.has(node)) {
        ans += ")";
        continue;
      }

      // 包裹自身
      ans += "(" + node.val;

      if (node.right || node.left) {
        // 缓存，记录当前的节点已经遍历过
        nodes.push(node);
        map.set(node, 1);

        // 不存 right=null
        node.right && nodes.push(node.right);
        nodes.push(node.left);
      } else {
        ans += ")";
      }
    } else {
      // 空的 left 才会存进来
      ans += "()";
    }
  }

  return ans.slice(1, -1);
};

// 结合 leetcode 后序遍历
// O(2n)/O(n)
// 80ms/46.1MB
var tree2str = function (root) {
  let ans = [];
  let nodes = [];
  let prev = null;

  while (root || nodes.length) {
    // 左节点放入
    while (root) {
      ans.push("(" /*  + root.val */);
      ans.push(root.val);

      nodes.push(root);
      if (!root.left && root.right) {
        ans.push("()" /*  + root.val */);
      }
      root = root.left;
    }

    root = nodes.pop();

    if (
      !root.right || // 无右
      root.right === prev // 右节点已遍历
    ) {
      ans.push(")" /*  + root.val */);
      prev = root;
      root = null;
    } else {
      // 重新放回去，拿出右节点
      nodes.push(root);
      root = root.right;
    }
  }

  return ans.join("").slice(1, -1);
};

// 68ms/45.5MB
var tree2str = function (root) {
  let ans = "";
  let nodes = [];
  let prev = null;

  while (root || nodes.length) {
    // 左节点放入
    while (root) {
      ans += "(" + root.val;

      nodes.push(root);
      if (!root.left && root.right) {
        ans += "()";
      }
      root = root.left;
    }

    root = nodes.pop();

    if (
      !root.right || // 无右
      root.right === prev // 右节点已遍历
    ) {
      ans += ")";
      prev = root;
      root = null;
    } else {
      // 重新放回去，拿出右节点
      nodes.push(root);
      root = root.right;
    }
  }

  return ans.slice(1, -1);
};

// ["(1",1,"(2",2,"()","(4",4,")4",")2","(3",3,")3",")1"]
// ["(1",1,"(2",2,"(4",4,")4",")2","(3",3,")3",")1"]
