// 108. 将有序数组转换为二叉搜索树
// https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
// 中序遍历
// 二分 + 分治
// O(n)/O(logn)
//  92ms/40MB
var sortedArrayToBST = function (nums, begin = 0, end = nums.length - 1) {
  if (begin === end) {
    return new Node(nums[begin]);
  }

  if (begin < end) {
    // 选择中间位置左边的数字作为根节点
    let mid = begin + ((end - begin) >> 1);

    // 选择中间位置右边的数字作为根节点
    // let mid = Math.ceil((begin + end) / 2);

    // 随机选择左右边的数字作为根节点
    // let mid = parseInt((begin + end + Math.round(Math.random())) / 2, 10);

    if (nums[mid] != null) {
      return new Node(
        nums[mid],
        sortedArrayToBST(nums, begin, mid - 1),
        sortedArrayToBST(nums, mid + 1, end)
      );
    }
  }
};

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

let nums;
// [0,-3,9,-10,null,5] [0,-10,5,null,-3,null,9]
nums = [-10, -3, 0, 5, 9];
console.log(sortedArrayToBST(nums));

// [1,3] [3,1]
nums = [1, 3];
console.log(sortedArrayToBST(nums));

// [3,1,5,0,2,4]
nums = [0, 1, 2, 3, 4, 5];
console.log(sortedArrayToBST(nums));
