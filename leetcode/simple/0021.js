// 21. 合并两个有序链表
// https://leetcode-cn.com/problems/merge-two-sorted-lists/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
// 迭代
// 时间复杂度：O(m + n)
// 空间复杂度：O(1)
// 72 ms / 39.2 MB
var mergeTwoLists = function (list1, list2) {
  if (!(list1 && list2)) {
    return list1 || list2;
  }

  if (list2.val < list1.val) {
    [list1, list2] = [list2, list1];
  }

  let next = list1;

  while (next && list2) {
    if (next.val <= list2.val) {
      if (next.next) {
        if (next.next.val > list2.val) {
          let l2next = list2.next;
          list2.next = next.next;
          next.next = list2;
          list2 = l2next;
        }
        next = next.next;
      } else {
        // 主链已经没有后续
        next.next = list2;
        next = null;
      }
    }
  }

  return list1;
};

// 题解的迭代
var mergeTwoLists = function (list1, list2) {
  if (!(list1 && list2)) {
    return list1 || list2;
  }

  const prehead = { next: null };
  let cur = prehead;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      cur.next = list1;
      list1 = list1.next;
    } else {
      cur.next = list2;
      list2 = list2.next;
    }

    cur = cur.next;
  }

  cur.next = list1 || list2;

  return prehead.next;
};

// 递归
// 72 ms / 39.7 MB
// O(m + n) / O(m + n)
// 注意边界条件、做好最后一步的处理
var mergeTwoLists = function (list1, list2) {
  if (!(list1 && list2)) {
    return list1 || list2;
  }

  let p = null;

  if (list1.val <= list2.val) {
    p = list1;
    p.next = mergeTwoLists(list1.next, list2);
  } else {
    p = list2;
    p.next = mergeTwoLists(list1, list2.next);
  }

  return p
};

// 题解
var mergeTwoLists = function (list1, list2) {
  if (!(list1 && list2)) {
    return list1 || list2;
  }

  if (list1.val <= list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2
  }
};

var list1 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 4,
    },
  },
};

var list2 = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 4,
    },
  },
};

var res = mergeTwoLists(list1, list2);
console.log(JSON.stringify(res));

list1 = null;
list2 = null;
res = mergeTwoLists(list1, list2);
console.log(JSON.stringify(res));

list1 = {
  val: 1,
};
list2 = null;
res = mergeTwoLists(list1, list2);
console.log(JSON.stringify(res));
