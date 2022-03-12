// 141. 环形链表
// https://leetcode-cn.com/problems/linked-list-cycle/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// hashMap
// O(n)/O(n)
// 84ms/45MB
var hasCycle = function (head) {
  let map = new Map();
  // console.log(head);
  while (head != null) {
    if (map.has(head)) {
      return true;
    } else {
      map.set(head, "1");
    }

    head = head.next;
  }
  return false;
};

// try + catch + JSON.stringify
// O(1)/O(1)
// 168ms/45.3MB
var hasCycle = function (head) {
  try {
    JSON.stringify(head);
    return false;
  } catch (err) {
    return true;
  }
};

// 快慢指针
// O(n)/O(1)
// 76ms/44.1MB
var hasCycle = function (head) {
  if (head) {
    let slow = head;
    let fast = head.next;

    while (fast && fast.next && slow) {
      if (slow === fast) {
        return true;
      }
      slow = slow.next;
      fast = fast.next.next;
    }
  }

  return false;
};

function createCycle(nodes, pos) {
  let head = { next: {} };
  let node = head;
  let added = [];
  nodes.forEach((val, idx) => {
    node.val = val;

    if (nodes[idx + 1] != null) {
      node.next = {};
      added.push(node);
      node = node.next;
    } else {
      node.next = added[pos];
    }
  });

  return head;
}

let head = null;
let nodes = null;
let p = null;

nodes = [3, 2, 0, -4];
pos = 1;
head = createCycle(nodes, pos);
console.log(hasCycle(head));

nodes = [1, 2];
pos = -1;
head = createCycle(nodes, pos);
console.log(hasCycle(head));

nodes = [1, 2];
pos = 0;
head = createCycle(nodes, pos);
console.log(hasCycle(head));


nodes = [1];
pos = -1;
head = createCycle(nodes, pos);
console.log(hasCycle(head));
