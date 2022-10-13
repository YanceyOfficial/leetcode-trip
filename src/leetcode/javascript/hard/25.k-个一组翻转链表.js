/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  if (head === null) return null

  let a = head,
    b = head

  for (let i = 0; i < k; i++) {
    // 不足 k 个, 不需要反转, base case
    if (b === null) return head
    b = b.next
  }
  // 反转前 k 个元素
  const newHead = reverse(a, b)

  // 递归反转后续链表并连接起来
  a.next = reverseKGroup(b, k)
  return newHead
}

var reverse = function (a, b) {
  let prev = null,
    curr = a

  while (curr !== b) {
    const next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }

  return prev
}
// @lc code=end
