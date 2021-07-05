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
var isPalindrome = function (head) {
  if (head === null || head.next === null) return true

  let slow = head,
    fast = head

  while (fast !== null && fast.next !== null) {
    slow = slow.next
    fast = fast.next.next
  }

  if (fast !== null) {
    slow = slow.next
  }

  let left = head
  let right = reverse(slow)

  while (right !== null) {
    if (left.val !== right.val) return false
    left = left.next
    right = right.next
  }

  return true
}

var reverse = function (head) {
  let prev = null,
    curr = head

  while (curr) {
    const next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }

  return prev
}
// @lc code=end
