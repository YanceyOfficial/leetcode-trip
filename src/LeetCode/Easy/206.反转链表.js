/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (head === null || head.next === null) return head

  const p = reverseList(head.next) // 递的过程: 找到尾部节点

  // 归的过程, 将尾部节点的 next 设为 head
  head.next.next = head
  // 并将 head 的 next 设为 null
  head.next = null

  return p
}
// @lc code=end
