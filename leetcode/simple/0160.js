// 160. 相交链表
// https://leetcode-cn.com/problems/intersection-of-two-linked-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// 暴力法
// O(m*n) / O(1)
// 780ms/44.4MB
var getIntersectionNode = function (headA, headB) {
  var p = headA;
  var q = headB;

  while (p) {
    q = headB;
    while (q) {
      if (p && q && q === p) {
        return q;
      }
      q = q.next;
    }
    p = p.next;
  }

  return null;
};

// HashMap
// O(m + n) / O(m)
// 84ms/45.9MB
var getIntersectionNode = function (headA, headB) {
  var m = headA;
  var n = headB;
  var map = new Map();

  while (m) {
    map.set(m, m);
    m = m.next;
  }

  while (n) {
    var p = map.get(n);

    if (p) {
      return p;
    }

    n = n.next;
  }

  return null;
};

// 双指针
// O(m + n) / O(1)
// 76ms/44.5MB
// a1,a2,c1,c2,c3,b1,b2,b3,c1
// b1,b2,b3,c1,c2,c3,a1,a2,c1
var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) {
    return null;
  }

  var pA = headA,
    pB = headB;

  while (pA !== pB) {
    pA = pA === null ? headB : pA.next;
    pB = pB === null ? headA : pB.next;
  }

  return pA;
};

var listA = null,
  listB = null,
  intersect = null;

// listA = [4, 1, 8, 4, 5];
// listB = [5, 6, 1, 8, 4, 5];

intersect = { val: 8, next: { val: 4, next: { val: 5 } } };
listA = {
  val: 4,
  next: { val: 1, next: intersect },
};
listB = {
  val: 4,
  next: { val: 1, next: intersect },
};

console.log(getIntersectionNode(listA, listB));

intersect = { val: 2, next: { val: 4 } };
listA = {
  val: 1,
  next: { val: 9, next: { val: 1, next: intersect } },
};

listB = { val: 3, next: intersect };
console.log(getIntersectionNode(listA, listB));

intersect = null;
listA = {
  val: 1,
  next: { val: 2, next: { val: 6, next: { val: 4 } } },
};

listB = { val: 1, next: { val: 5 } };
console.log(getIntersectionNode(listA, listB));
