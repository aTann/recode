// 589. N 叉树的前序遍历
// https://leetcode-cn.com/problems/n-ary-tree-preorder-traversal/
/**
 * // Definition for a Node.
 * function Node(val, children) {
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
// 76ms/46.8MB
var preorder = function (root) {
  const list = [];
  if (root) {
    const { children, val } = root;
    list.push(val);
    if (children.length) {
      children.forEach((child) => {
        list.push(...preorder(child));
      });
    }
  }

  return list;
};

// 迭代
// 72ms/44.1MB
var preorder = function (root) {
  const list = [];
  if (root) {
    let nodes = [root];
    while (nodes.length) {
      root = nodes.shift();
      const { children, val } = root;
      list.push(val);
      if (children.length) {
        // 80ms/44.3MB
        // nodes = children.concat(nodes);
        // 72ms/44.1MB
        nodes.unshift(...children);
      }
    }
  }

  return list;
};

// 68ms/44.1MB
var preorder = function (root) {
  const list = [];
  if (root) {
    let nodes = [root];
    while (nodes.length) {
      const { children, val } = nodes.pop();
      list.push(val);
      if (children.length) {
        for (let i = children.length; i >= 0; i -= 1) {
          children[i] && nodes.push(children[i]);
        }
      }
    }
  }

  return list;
};

// 利用 Map 记录当前节点以及索引
var preorder = function (root) {
  const ans = [];
  if (!root) {
    return ans;
  }

  const nextIndex = new WeakMap();
  const st = [];
  let node = root;

  while (st.length || node) {
    // 将节点的首字节点进行遍历
    while (node) {
      st.push(node);
      ans.push(node.val);

      if (!node.children.length) {
        break;
      }

      nextIndex.set(node, 1);
      node = node.children[0];
    }

    // 从缓存内去节点
    node = st[st.length - 1];
    // 下一个索引值
    const index = nextIndex.get(node);
    // 小于子节点数
    if (index < node.children.length) {
      // 当前节点索引前移
      nextIndex.set(node, index + 1);
      // 取出下一个要遍历的子节点
      node = node.children[index];
    } else {
      // 大于子节点数，子节点已经遍历完
      // 移除当前节点的缓存，node 置空
      nextIndex.delete(node);
      st.pop();
      node = null;
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
console.log(preorder(root));

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
console.log(preorder(root));
