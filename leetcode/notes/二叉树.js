const treeNodes = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const bTree = {
  value: "a",
  children: {
    left: {
      value: "b",
      children: {
        left: {
          value: "d",
        },
        right: {
          value: "e",
        },
      },
    },
    right: {
      value: "c",
      children: {
        left: {
          value: "f",
        },
        right: {
          value: "g",
        },
      },
    },
  },
};

// 创建
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

console.log(JSON.stringify(creatBiTree(treeNodes)));

// 广度优先（Breadth First Search BFS），层次遍历：逐层，从左到右访问所有节点

function breadth(node) {
  let lst = [];
  const { children = {} } = node;

  if (children.left) {
    lst.push(children.left.value);
  }

  if (children.right) {
    lst.push(children.right.value);
  }

  if (children.left.children) {
    lst.push(...breadth(children.left));
  }

  if (children.right.children) {
    lst.push(...breadth(children.right));
  }

  return lst;
}

const l = breadth(bTree);
l.unshift(bTree.value);
console.log(l);

// 深度优先
// 先序（preorder tree walk）：根结点位于左右节点前面

function preorder(node) {
  let lst = [];
  const { children = {} } = node;

  lst.push(node.value);

  if (children.left) {
    lst.push(...preorder(children.left));
  }

  if (children.right) {
    lst.push(...preorder(children.right));
  }

  return lst;
}

const pre = preorder(bTree);
console.log(pre);

// 中序（inorder tree walk）：根结点位于左右节点之间
function inorder(node) {
  let lst = [];
  const { children = {} } = node;

  if (children.left) {
    lst.push(...inorder(children.left));
  }

  lst.push(node.value);

  if (children.right) {
    lst.push(...inorder(children.right));
  }

  return lst;
}

const ino = inorder(bTree);
console.log(ino);

// 后序（postorder tree walk）：根结点位于左右节点后面
function postorder(node) {
  let lst = [];
  const { children = {} } = node;

  if (children.left) {
    lst.push(...postorder(children.left));
  }

  if (children.right) {
    lst.push(...postorder(children.right));
  }

  lst.push(node.value);

  return lst;
}

const post = postorder(bTree);
console.log(post);

// 1. [js数组层序建立二叉树](https://blog.csdn.net/qq_40731976/article/details/113176820)
// 2. [二叉树](https://zh.wikipedia.org/wiki/二叉树)
// 3. [你会翻转二叉树吗？--谈程序员的招聘](http://blog.devtang.com/2015/06/16/talk-about-tech-interview/)
