// 203. 移除链表元素
// https://leetcode-cn.com/problems/remove-linked-list-elements/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
// 迭代
// O(n)/O(1)
// 96ms/42.8MB
var removeElements = function (head, val) {
  if (!head) {
    return head;
  }

  let pHead = { next: head };
  let p = pHead;

  while (p.next) {
    if (p.next.val === val) {
      p.next = p.next.next;
    } else {
      p = p.next;
    }
  }

  return pHead.next;
};

// 递归
// O(n)/O(n)
// 80ms/43MB
var removeElements = function (head, val) {
  if (!head) {
    return head;
  }

  if (head.val === val) {
    return removeElements(head.next, val);
  }

  head.next = removeElements(head.next, val);
  return head;
};

// 题解
var removeElements = function (head, val) {
  if (!head) {
    return head;
  }

  head.next = removeElements(head.next, val);
  return head.val === val ? head.next : head;
};

var getHead = (nodes) => {
  if (!nodes.length) {
    return null;
  }

  var i = 0;
  var list = {};
  var next = list;
  while (i < nodes.length) {
    next.val = nodes[i];
    if (i < nodes.length - 1) {
      next.next = {};
    }

    //   console.log(next);
    next = next.next;
    i += 1;
  }
  return list;
};

let head = null,
  val = 0;

head = [1, 2, 6, 3, 4, 5, 6];
val = 6;
console.log(JSON.stringify(removeElements(getHead(head), val)));

head = [];
val = 1;
console.log(JSON.stringify(removeElements(getHead(head), val)));

head = [7, 7, 7, 7];
val = 7;
console.log(JSON.stringify(removeElements(getHead(head), val)));
