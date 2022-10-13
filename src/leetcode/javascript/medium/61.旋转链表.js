/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head || !head.next) return head

  let curr = head
  let len = 0
  while (curr) {
    curr = curr.next
    len++
  }

  k = k % len

  if (k === 0) return head

  let fast = head,
    slow = head
  while (k) {
    fast = fast.next
    k--
  }

  while (fast.next) {
    fast = fast.next
    slow = slow.next
  }

  const newHead = slow.next
  slow.next = null
  fast.next = head

  return newHead
}
// @lc code=end

function ListNode(val) {
  this.val = val
  this.next = null
}

const linkedList = new ListNode(1)
linkedList.next = new ListNode(2)
linkedList.next.next = new ListNode(3)
linkedList.next.next.next = new ListNode(4)
linkedList.next.next.next.next = new ListNode(5)

console.log(rotateRight(linkedList, 2))
