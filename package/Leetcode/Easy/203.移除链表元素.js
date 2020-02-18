/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  let sentinel = new ListNode(null),
    prev = sentinel,
    curr = heado
  sentinel.next = head

  while (curr) {
    if (curr.val === val) {
      prev.next = curr.next
      curr = prev.next
    } else {
      prev = curr
      curr = curr.next
    }
  }

  return sentinel.next
}
// @lc code=end
