/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
  const dummyHead = new ListNode(0)
  dummyHead.next = head

  let g = dummyHead,
    p = dummyHead.next

  for (let step = 0; step < m - 1; step++) {
    g = g.next
    p = p.next
  }

  for (let i = 0; i < n - m; i++) {
    const removed = p.next
    p.next = p.next.next
    removed.next = g.next
    g.next = removed
  }

  return dummyHead.next
}
// @lc code=end
