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
  let fast = head
  let slow = head
  while (n-- > 0) {
    fast = fast.next
  }
  if (fast == null) {
    // 如果此时快指针走到头了
    // 说明倒数第 n 个节点就是第一个节点
    return head.next
  }
  // 让慢指针和快指针同步向前
  while (fast !== null && fast.next !== null) {
    fast = fast.next
    slow = slow.next
  }
  // slow.next 就是倒数第 n 个节点, 删除它
  slow.next = slow.next.next
  return head
}
// @lc code=end
