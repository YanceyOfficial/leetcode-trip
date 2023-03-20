/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  let small = new ListNode(0)
  const smallHead = small

  let large = new ListNode(0)
  const largeHead = large

  while (head) {
    if (head.val < x) {
      small.next = head
      small = small.next
    } else {
      large.next = head
      large = large.next
    }

    head = head.next
  }

  large.next = null
  small.next = largeHead.next

  return smallHead.next
}
// @lc code=end

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

const l = new ListNode(1)
l.next = new ListNode(4)
l.next.next = new ListNode(3)
l.next.next.next = new ListNode(2)
l.next.next.next.next = new ListNode(5)
l.next.next.next.next.next = new ListNode(2)

console.log(partition(l, 3))
