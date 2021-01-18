/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
  if (head === null || head.next === null) return true

  let slow = head,
    fast = head,
    prev = null

  while (slow) {
    if (fast && fast.next) {
      fast = fast.next.next
      const temp = slow
      slow = slow.next
      temp.next = prev
      prev = temp
    } else {
      if (fast) {
        fast = null
        slow = slow.next
      }

      if (prev.val !== slow.val) {
        return false
      }
      slow = slow.next
      prev = prev.next
    }
  }

  return true
}
// @lc code=end
