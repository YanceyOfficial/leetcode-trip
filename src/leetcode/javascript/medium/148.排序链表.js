/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
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
 * @return {ListNode}
 */
var sortList = function (head) {
  if (!head || !head.next) return head

  // 首先获取链表的长度
  let length = 0
  let node = head
  while (node) {
    length++
    node = node.next
  }

  const dummy = new ListNode(-1, head)

  for (let size = 1; size < length; size <<= 1) {
    let curr = dummy.next
    let tail = dummy

    while (curr) {
      let left = curr
      let right = cut(left, size)
      curr = cut(right, size)

      tail.next = merge(left, right)
      while (tail.next) {
        tail = tail.next
      }
    }
  }

  return dummy.next
}

var cut = function (head, size) {
  let node = head
  while (--size && node) {
    node = node.next
  }

  if (!node) return null

  const next = node.next
  node.next = null

  return next
}

var merge = function (head1, head2) {
  const dummy = new ListNode(-1)
  let head = dummy
  let l1 = head1
  let l2 = head2

  while (l1 && l2) {
    if (l1.val < l2.val) {
      head.next = l1
      l1 = l1.next
    } else {
      head.next = l2
      l2 = l2.next
    }

    head = head.next
  }

  if (l1) head.next = l1
  if (l2) head.next = l2

  return dummy.next
}
