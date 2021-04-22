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
    const k = Math.floor((n + 1) / 2)
    for (let i = 0; i < Math.floor(n / 2); ++i) {
      lists[i] = mergeTwoLists(lists[i], lists[i + k])
    }
    n = k
  }
  return lists[0]
}

var mergeTwoLists = function (l1, l2) {
  const dummy = new ListNode(-1)
  let cur = dummy
  while (l1 && l2) {
    if (l1.val < l2.val) {
      cur.next = l1
      l1 = l1.next
    } else {
      cur.next = l2
      l2 = l2.next
    }
    cur = cur.next
  }
  if (l1) cur.next = l1
  if (l2) cur.next = l2
  return dummy.next
}
// @lc code=end
