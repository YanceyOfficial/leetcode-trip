/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (!head) return head

  let slow = head,
    fast = head

  while (fast) {
    if (fast.val !== slow.val) {
      slow.next = fast
      slow = slow.next
    }

    fast = fast.next
  }

  // 断开与后面重复元素的连接
  slow.next = null

  return head
}
// @lc code=end
function ListNode(val) {
  this.val = val
  this.next = null
}

const linkedList = new ListNode(1)
linkedList.next = new ListNode(1)
linkedList.next.next = new ListNode(2)
linkedList.next.next.next = new ListNode(3)
linkedList.next.next.next.next = new ListNode(4)

const res = deleteDuplicates(linkedList)
console.log(res)
