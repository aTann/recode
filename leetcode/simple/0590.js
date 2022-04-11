// 590. N 叉树的后序遍历
// https://leetcode-cn.com/problems/n-ary-tree-postorder-traversal/
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
// 递归
// O(n)/O(n)
// 76ms/46.7MB
var postorder = function (root) {
  const ans = [];

  if (!root) {
    return ans;
  }

  const { children, val } = root;

  if (children.length) {
    children.forEach((child) => {
      ans.push(...postorder(child));
    });
  }
  ans.push(val);

  return ans;
};

// 迭代
// O(n)/O(n)
// 72ms/43.8MB
var postorder = function (root) {
  const nodes = [];
  const pNodes = [];
  const ans = [];

  if (!root) {
    return ans;
  }

  nodes.push(root);

  while (nodes.length) {
    root = nodes.pop();
    // 先进后出
    if (root.children && root.children.length) {
      if (root === pNodes[pNodes.length - 1]) {
        ans.push(root.val);
        pNodes.pop();
      } else {
        pNodes.push(root);
        nodes.push(root);
        // children 需要逆转
        // 72ms/43.8MB
        // nodes.push(...root.children.reverse());
        // // 72ms/44.1MB
        for (let i = root.children.length; i >= 0; i -= 1) {
          const child = root.children[i];
          if (child) {
            nodes.push(child);
          }
        }
      }
    } else {
      ans.push(root.val);
    }
  }

  return ans;
};

// HashMap
// O(n)/O(n)
// 72ms/44.9MB
var postorder = function (root) {
  const ans = [];
  if (root) {
    const nextIndex = new Map();
    let node = root;
    const st = [];

    while (st.length || node) {
      while (node) {
        st.push(node);

        if (!node.children) {
          break;
        }

        nextIndex.set(node, 1);
        node = node.children[0];
      }

      node = st[st.length - 1];
      const index = nextIndex.get(node);
      if (index < node.children.length) {
        nextIndex.set(node, index + 1);
        node = node.children[index];
      } else {
        ans.push(node.val);
        nextIndex.delete(node);
        st.pop();
        node = null;
      }
    }
  }

  return ans;
};

const create = (list) => {
  const tree = { root: new Node(null, []) };
  let root = tree.root;
  let children = [root];

  list.forEach((item) => {
    if (item != null) {
      if (root.val == null) {
        root.val = item;
      } else {
        const temp = new Node(item, []);
        root.children.push(temp);
        children.push(temp);
      }
    } else {
      root = children.shift();
    }
  });

  function Node(val, children) {
    this.val = val;
    this.children = children;
  }
  return tree.root;
};

var nodes = [1, null, 3, 2, 4, null, 5, 6];
var root = create(nodes);
console.log(postorder(root));

var nodes = [
  1,
  null,
  2,
  3,
  4,
  5,
  null,
  null,
  6,
  7,
  null,
  8,
  null,
  9,
  10,
  null,
  null,
  11,
  null,
  12,
  null,
  13,
  null,
  null,
  14,
];
var root = create(nodes);
console.log(postorder(root));
