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
  if (!lists || lists.length === 0) {
    return null
  }

  // 引入递归函数 merge, 处理 lists[start] 到 lists[end] 范围内的合并
  const merge = (start, end) => {
    // 1. 基本情况 (Base Case)
    // 当范围缩小到只有一个链表时, 直接返回该链表
    if (start === end) {
      return lists[start]
    }
    // 当范围无效时, 返回 null
    if (start > end) {
      return null
    }

    // 2. 分解 (Divide)
    const mid = Math.floor((start + end) / 2)

    // 递归合并左半部分
    const left = merge(start, mid)

    // 递归合并右半部分
    const right = merge(mid + 1, end)

    // 3. 合并 (Conquer)
    // 将左右两部分的结果使用 mergeTwoLists 函数进行合并
    return mergeTwoLists(left, right)
  }

  // 从整个链表数组的范围 [0, lists.length - 1] 开始递归
  return merge(0, lists.length - 1)
}

var mergeTwoLists = function (l1, l2) {
  const dummy = new ListNode()
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

  if (l1) curr.next = l1
  if (l2) curr.next = l2

  return dummy.next
}
// @lc code=end
