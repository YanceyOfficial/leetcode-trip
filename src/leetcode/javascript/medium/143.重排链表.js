/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  if (!head) return null

  const mid = findMiddleNode(head)
  let l1 = head
  let l2 = mid.next
  mid.next = null
  l2 = reverseLinkedList(l2)
  mergeLinkedList(l1, l2)
}

var findMiddleNode = function (head) {
  let fast = head
  let slow = head

  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
  }

  return slow
}

var reverseLinkedList = function (head) {
  let prev = null
  // 注意不要直接使用 head, 而是浅拷贝一个引用
  let curr = head

  while (curr) {
    const tmp = curr.next
    curr.next = prev
    prev = curr
    curr = tmp
  }

  return prev
}

var mergeLinkedList = function (l1, l2) {
  while (l1 && l2) {
    const l1_tmp = l1.next
    const l2_tmp = l2.next

    l1.next = l2
    l1 = l1_tmp

    l2.next = l1
    l2 = l2_tmp
  }
}
// @lc code=end
