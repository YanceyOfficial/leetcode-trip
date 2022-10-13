/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
var swapPairs = function (head) {
  let dummy = new ListNode(0)
  dummy.next = head
  let temp = dummy
  while (temp.next !== null && temp.next.next !== null) {
    let start = temp.next
    let end = temp.next.next
    temp.next = end
    start.next = end.next
    end.next = start
    temp = start
  }
  return dummy.next
}

var swapPairs = function (head) {
  if (head === null || head.next === null) {
    return head
  }
  const newHead = head.next
  head.next = swapPairs(newHead.next)
  newHead.next = head
  return newHead
}

// @lc code=end
const ll = {
  val: 1,
  next: { val: 2, next: { val: 3, next: { val: 4, next: null } } },
}

console.log(swapPairs(ll))
