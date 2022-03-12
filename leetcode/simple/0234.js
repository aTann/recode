// 234. 回文链表
// https://leetcode-cn.com/problems/palindrome-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 数据先入栈，再进行处理
// O(n)/O(n)
// 188ms/70.4MB
var isPalindrome = function (head) {
  let list = [];
  while (head != null) {
    list.push(head.val);
    head = head.next;
  }

  let left = 0,
    right = list.length - 1;

  while (left < right) {
    if (list[left] !== list[right]) {
      return false;
    }
    left += 1;
    right -= 1;
  }

  return true;
};

// 递归
// O(n)/O(n)
// 160ms/76.6MB
var isPalindrome = function (self, head = self) {
  if (!head.next) {
    if (self.val === head.val) {
      return self.next;
    }

    return false;
  }

  var res = isPalindrome(self, head.next);

  if (res) {
    if (head === res) {
      return true;
    }

    if (!res.next) {
      return true;
    }

    if (res.val === head.val) {
      return res.next;
    }
  }

  return false;
};

// 题解
let frontPointer;

const recursivelyCheck = (currentNode) => {
  if (currentNode !== null) {
    if (!recursivelyCheck(currentNode.next)) {
      return false;
    }
    if (currentNode.val !== frontPointer.val) {
      return false;
    }
    frontPointer = frontPointer.next;
  }
  return true;
};

var isPalindrome = function (head) {
  frontPointer = head;
  return recursivelyCheck(head);
};

// 快慢指针
// O(n)/O(1)
// 168ms/68.2MB
const reverseList = function (head) {
  let prev = null;
  let cur = head;
  while (cur != null) {
    let nextTemp = cur.next;
    cur.next = prev;
    prev = cur;
    cur = nextTemp;
  }

  return prev;
};

// 快慢指针使用处，找到中间位置的节点
const endOfFirstHalf = function (head) {
  let slow = head;
  let fast = head;

  while (slow.next && fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

var isPalindrome = function (head) {
  // 找到前半部分链表节点并返回
  const firstHalfEnd = endOfFirstHalf(head);
  const secondHalfStart = reverseList(firstHalfEnd.next);

  // 判断是否回文
  let p1 = head;
  let p2 = secondHalfStart;
  let result = true;
  while (result && p2 != null) {
    if (p1.val !== p2.val) {
      result = false;
    }

    p1 = p1.next;
    p2 = p2.next;
  }

  // 还原链表并返回结果
  firstHalfEnd.next = reverseList(secondHalfStart);

  return result;
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
let head = null,
  nodes = null;

nodes = [1, 2, 2, 1];
head = addNodes(nodes);
console.log(head);
console.log(isPalindrome(head));

nodes = [1, 2];
head = addNodes(nodes);
console.log(isPalindrome(head));
