/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个排序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  let n = lists.length

  if (n === 0) return null

  while (n > 1) {
    const k = ((n + 1) / 2) | 0

    for (let i = 0; i < ((n / 2) | 0); i++) {
      lists[i] = mergeTwoLists(lists[i], lists[i + k])
    }

    n = k
  }

  return lists[0]
}

var mergeTwoLists = function (l1, l2) {
  const dummy = new ListNode(-1)
  let curr = dummy

  while (l1 && l2) {
    if (l1.val < l2.val) {
      curr.next = l1
      l1 = l1.next
    } else {
      curr.next = l2
      l2 = l2.next
    }

    curr = curr.next
  }

  if (l1 !== null) curr.next = l1
  if (l2 !== null) curr.next = l2

  return dummy.next
}
// @lc code=end
