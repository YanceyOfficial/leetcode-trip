/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
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
var deleteDuplicates = function (head) {
  if (!head) return head
  const dummy = new ListNode(Number.MAX_SAFE_INTEGER, head)

  let curr = dummy
  while (curr.next && curr.next.next) {
    if (curr.next.val === curr.next.next.val) {
      const currVal = curr.next.val
      while (curr.next && curr.next.val === currVal) {
        curr.next = curr.next.next
      }
    } else {
      curr = curr.next
    }
  }

  return dummy.next
}
// @lc code=end
