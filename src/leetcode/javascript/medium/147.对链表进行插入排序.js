/*
 * @lc app=leetcode.cn id=147 lang=javascript
 *
 * [147] 对链表进行插入排序
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
var insertionSortList = function (head) {
  if (!head) return head

  const dummy = new ListNode(-1, head)
  let lastSorted = head
  let curr = head.next

  while (curr) {
    if (lastSorted.val <= curr.val) {
      lastSorted = lastSorted.next
    } else {
      let prev = dummy
      while (prev.next.val <= curr.val) {
        prev = prev.next
      }

      lastSorted.next = curr.next
      curr.next = prev.next
      prev.next = curr
    }

    curr = lastSorted.next
  }

  return dummy.next
}
// @lc code=end
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

const node = new ListNode(
  -1,
  new ListNode(5, new ListNode(3, new ListNode(4, new ListNode(0)))),
)
console.log(insertionSortList(node))
