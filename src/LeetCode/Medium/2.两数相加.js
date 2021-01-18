/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
  const pre = new ListNode(0)
  let curr = pre
  let carry = 0

  while (l1 || l2) {
    let x = l1 === null ? 0 : l1.val
    let y = l1 === null ? 0 : l2.val

    let sum = x + y + carry
    carry = (sum / 10) | 0
    sum = sum % 10
    curr.next = new ListNode(sum)
    curr = curr.next

    if (l1 !== null) {
      l1 = l1.next
    }

    if (l2 !== null) {
      l2 = l2.next
    }
  }

  if (carry === 1) {
    curr.next = new ListNode(curr)
  }

  return pre.next
}
// @lc code=end
