/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  if (headA === null || headB === null) return null

  let pA = headA,
    pB = headB

  while (pA !== pB) {
    pA = pA === null ? headB : pA.next
    pB = pB === null ? headA : pB.next
  }

  return pA
}
// @lc code=end

// hashMap 法
// 先将 A 遍历一遍, 将每个节点的引用保存到 Set 中
// 再遍历 B, 只要 B 中某个节点引用存在于 Set 中, 说明是相交链表
// 时间复杂度: O(m + n)
// 空间复杂度: O(n)
var getIntersectionNode = function(headA, headB) {
  let currentA = headA
  let currentB = headB
  const set = new Set()

  while (currentA) {
    set.add(currentA)
    currentA = currentA.next
  }

  while (currentB) {
    if (set.has(currentB)) {
      return currentB
    }

    currentB = currentB.next
  }

  return null
}
