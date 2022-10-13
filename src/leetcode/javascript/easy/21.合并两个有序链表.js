/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
// 递归版
var mergeTwoLists = function (l1, l2) {
  if (l1 === null) return l2
  if (l2 === null) return l1

  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  } else {
    l2.next = mergeTwoLists(l1, l2.next)
    return l2
  }
}

// 迭代版
var mergeTwoLists = function (l1, l2) {
  let head = new ListNode(-1)
  const dummy = head

  while (l1 && l2) {
    if (l1.val < l2.val) {
      head.next = l1
      l1 = l1.next
      head = head.next
    } else {
      head.next = l2
      l2 = l2.next
      head = head.next
    }
  }

  if (l1 !== null) head.next = l1
  if (l2 !== null) head.next = l2

  return dummy.next
}
// @lc code=end

function ListNode(val) {
  this.val = val
  this.next = null
}

const l1 = new ListNode(1)
l1.next = new ListNode(4)
l1.next.next = new ListNode(5)

const l2 = new ListNode(1)
l2.next = new ListNode(3)
l2.next.next = new ListNode(4)
l2.next.next.next = new ListNode(7)
