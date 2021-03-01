/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let curr = head
  let total = 0
  while (curr !== null) {
    total++
    curr = curr.next
  }

  let deletedNodeIndex = total - n
  let prev = head

  for (let i = 0; i < deletedNodeIndex - 1; i++) {
    prev = prev.next
  }

  if (deletedNodeIndex === 0) {
    return head.next
  }

  prev.next = prev.next.next
  return head
}
// @lc code=end
const l = {
  val: 1,
  next: {
    val: 2,
    next: { val: 3, next: { val: 4, next: { val: 5, next: null } } },
  },
}

removeNthFromEnd(l, 2)
