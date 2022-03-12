// 83. 删除排序链表中的重复元素
// https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/

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
// 迭代
// O(n)/O(1)
// 92ms/39.7MB

var deleteDuplicates = function (head) {

  if (!head) {
    return head
  }

  let cur = head;

  while (cur.next) {
    let {next} = cur;
    if (next.val === cur.val) {
      cur.next = next.next
    } else {
      cur = next
    }
  }

  return head;
};

var head = null;

head = {
  val: 1,
  next: {
    val: 1,
    next: {
      val: 2,
      next: null
    }
  }
}

console.log(deleteDuplicates(head)); 
