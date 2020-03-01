/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
var deleteDuplicates = function(head) {
  let current = head
  while (current !== null && current.next !== null) {
    if (current.next.val === current.val) {
      current.next = current.next.next
    } else {
      current = current.next
    }
  }
  return head
}
// @lc code=end
