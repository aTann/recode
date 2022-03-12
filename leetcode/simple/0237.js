// 237. 删除链表中的节点
// https://leetcode-cn.com/problems/delete-node-in-a-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
// 使用下一个值进行替换
// O(n)/O(1)
// 72ms/43.5MB
var deleteNode = function (node) {
  let pre = null;
  while (node.next) {
    const nextTemp = node.next;
    node.val = nextTemp.val;
    pre = node;
    node = node.next;
  }
  pre.next = null;
};

// 下一个数据替换上来
// O(1)/O(1)
// 68ms/43.1MB
var deleteNode = function (node) {
  node.val = node.next.val
  node.next = node.next.next
};

function addNodes(nodes) {
  let head = { next: {} };
  let node = head;
  nodes.forEach((val, idx) => {
    node.val = val;
    if (nodes[idx + 1] != null) {
      node.next = {};
      node = node.next;
    }
  });

  return head;
}

let nodes = null,
  node = null,
  head = null;

nodes = [4, 5, 1, 9];
// console.log(JSON.stringify(addNodes(nodes)));
node = { val: 5, next: { val: 1, next: { val: 9 } } };
head = { next: node, val: 4 };
deleteNode(node);
console.log(JSON.stringify(head));

nodes = [2, 0, 1, 3];
// console.log(JSON.stringify(addNodes(nodes)));
node = { next: { val: 0, next: { val: 1, next: { val: 3 } } }, val: 2 };
head = node;
deleteNode(node);
console.log(JSON.stringify(head));
