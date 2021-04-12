/*
 * @lc app=leetcode.cn id=445 lang=javascript
 *
 * [445] 两数相加 II
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
var addTwoNumbers = function (l1, l2) {
  const stack1 = []
  const stack2 = []

  while (l1 !== null) {
    stack1.push(l1.val)
    l1 = l1.next
  }

  while (l2 !== null) {
    stack2.push(l2.val)
    l2 = l2.next
  }

  const head = new ListNode(0)
  let carry = 0

  while (stack1.length !== 0 || stack2.length !== 0 || carry !== 0) {
    let sum = 0
    const val1 = stack1.length === 0 ? 0 : stack1.pop()
    const val2 = stack2.length === 0 ? 0 : stack2.pop()
    sum = val1 + val2 + carry

    carry = (sum / 10) | 0

    const tmp = new ListNode(sum % 10)
    tmp.next = head.next
    head.next = tmp
  }

  return head.next
}
// @lc code=end
