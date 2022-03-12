// 206. 反转链表
// https://leetcode-cn.com/problems/reverse-linked-list/

// 迭代方式
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let prev,
    next,
    cur = head;

  // 空列表处理
  if (cur && cur.next) {
    prev = cur;
    cur = cur.next;
    next = cur.next;
    cur.next = prev;

    prev.next = null; // 第 1 个需要置 null，防止循环引用  

    while (next) {
      prev = cur; // 保存已经转化好的
      cur = next;
      next = cur.next;
      cur.next = prev;
    }
  }

  return cur;
};

// 递归
function reverseHead(head, reversed) {
  if (!head) {
    return reversed;
  }

  let cur = head;
  let next = null;

  next = cur.next;
  cur.next = reversed;

  // 尾递归优化
  return reverseHead(next, cur);
}

function reverseHead2(head, reversed) {
  if (!head) {
    return reversed;
  }

  let next = head.next;
  head.next = reversed;

  // 尾递归优化
  return reverseHead(next, head);
}

// 先取出，再重新处理
function rh(head) {
  if (head.next) {
    let next = head.next;
    let list = [head];

    while (next) {
      list.push(next);
      next = next.next;
    }

    head = list.pop();
    next = head;

    while (list.length) {
      next.next = list.pop();
      next = next.next;
    }

    next.next = null;
    
  }

  return head;
}

// 数据
let link = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null,
        },
      },
    },
  },
};
let l = rh(link);
console.log( JSON.stringify(l));
