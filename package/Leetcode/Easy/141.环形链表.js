/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
var hasCycle = function(head) {
  if (!head || !head.next) return false

  let slow = head
  let fast = head.next

  while (slow !== fast) {
    if (!fast || !fast.next) return false

    slow = slow.next
    fast = fast.next.next
  }

  return true
}
// @lc code=end

// 环形链表循环的节点是一个「链表结构」,因此在遍历过程中如果再次找到该节点的引用
// 就证明它是一个环形链表
var hasCycle = function(head) {
  let current = head
  const set = new Set()

  while (current) {
    if (set.has(current)) {
      return true
    }
    set.add(current)
    current = current.next
  }

  return false
}
