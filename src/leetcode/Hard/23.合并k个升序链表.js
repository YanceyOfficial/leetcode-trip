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
  const listNodes = []
  for (const list of lists) {
    let head = list
    while (head) {
      arr.push(list)
      list = list.next
    }
  }

  const pq = new PriorityQueue()

  for (const listNode of listNodes) {
    pq.offer(listNode)
  }

  let root = new ListNode(-1)
  let prevHead = root
  while (pq.size()) {
    prevHead.next = pq.poll()
    prevHead = prevHead.next
  }

  return root.next
}
// @lc code=end
