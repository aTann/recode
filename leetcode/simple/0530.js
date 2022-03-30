// 530. 二叉搜索树的最小绝对差
// https://leetcode-cn.com/problems/minimum-absolute-difference-in-bst/
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
// 节点值与左右节点值对比，其次与左节点最右节点对比，与右节点最左节点对比
// O(n ** 2)/O(n)
// 72ms/48.2MB
var getMinimumDifference = function (root) {
  const { left, val, right } = root;

  if (!left && !right) {
    return Number.MAX_SAFE_INTEGER;
  }

  let lDiff, rDiff;

  if (left) {
    let temp = left.right || { val: Infinity };
    while (temp && temp.right) {
      temp = temp.right;
    }
    lDiff = Math.min(
      Math.abs(left.val - val),
      Math.abs(temp.val - val),
      getMinimumDifference(left)
    );
  }

  if (right) {
    let temp = right.left || { val: Infinity };
    while (temp && temp.left) {
      temp = temp.left;
    }
    rDiff = Math.min(
      Math.abs(right.val - val),
      Math.abs(temp.val - val),
      getMinimumDifference(right)
    );
  }

  if (lDiff && rDiff) {
    return Math.min(lDiff, rDiff);
  }

  return lDiff || rDiff;
};

// 迭代中序
var getMinimumDifference = function (root) {
  let pre = -1,
    min = Number.MAX_SAFE_INTEGER;
  const inorder = (node) => {
    if (!node) {
      return;
    }
    inorder(node.left);

    if (pre === -1) {
      pre = node.val;
    } else {
      min = Math.min(min, node.val - pre);
      pre = node.val;
    }

    inorder(node.right);
  };
  inorder(root);

  return min;
};

// Morries，中序搜索
// O(n)/O(1)
// 72ms/46.8MB
var getMinimumDifference = function (root) {
  let min = Number.MAX_SAFE_INTEGER;
  let pre = -1;

  while (root) {
    if (root.left) {
      let temp = root.left;
      min = Math.min(min, Math.abs(root.val - temp.val));
      while (temp.right && temp.right !== root) {
        temp = temp.right;
      }

      if (temp.right == null) {
        temp.right = root;
        root = root.left;
      } else {
        min = Math.min(min, Math.abs(root.val - pre));
        pre = root.val;

        temp.right = null;
        root = root.right;
      }
    } else {
      if (pre === -1) {
        pre = root.val;
      } else {
        min = Math.min(min, Math.abs(root.val - pre));
        pre = root.val;
      }
      root = root.right;
    }
  }
  return min;
};

function create(list) {
  const tree = { root: {} };
  const root = tree.root;
  const nodes = [root];
  while (list.length) {
    const val = list.shift();
    const node = nodes.shift();
    if (node.val === void 0) {
      node.val = val;
      nodes.unshift(node);
    } else if (node.left === void 0) {
      if (val !== null) {
        node.left = { val };
        nodes.push(node.left);
      } else {
        node.left = val;
      }
      nodes.unshift(node);
    } else if (node.right === void 0) {
      if (val !== null) {
        node.right = { val };
        nodes.push(node.right);
      } else {
        node.right = val;
      }
    }
  }

  return tree.root;
}

var root = create([4, 2, 6, 1, 3]);
// console.log(root);
console.log(getMinimumDifference(root));

var root = create([1, 0, 48, null, null, 12, 49]);
// console.log(root);
console.log(getMinimumDifference(root));

var root = create([236, 104, 701, null, 227, null, 911]);
// console.log(root);
console.log(getMinimumDifference(root));

var root = create([0, null, 2236, 1277, 2776, 519]);
console.log(JSON.stringify(root));
console.log(getMinimumDifference(root));

var root = create([543, 384, 652, null, 445, null, 699]);
console.log(JSON.stringify(root));
console.log(getMinimumDifference(root));
